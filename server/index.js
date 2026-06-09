require('dotenv').config()
const express    = require('express')
const nodemailer = require('nodemailer')
const cors       = require('cors')
const mongoose   = require('mongoose')
const path       = require('path')
const Lead       = require('./models/Lead')
const Payment    = require('./models/Payment')

const app = express()
app.use(cors())
app.use(express.json())

const RECIPIENT = 'aliyanabbas2812@gmail.com'

// ─── MongoDB connection ────────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err.message))

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,   // your Gmail address
    pass: process.env.EMAIL_PASS,   // Gmail App Password (16-char)
  },
})

app.post('/api/payment-confirmation', async (req, res) => {
  const { name, email, phone, package: pkg, amount } = req.body

  const html = `
    <div style="background:#080808;padding:40px 32px;font-family:'Helvetica Neue',sans-serif;max-width:560px;margin:0 auto;border:1px solid rgba(201,168,76,0.3);">
      <div style="border-top:3px solid #C9A84C;padding-top:28px;margin-bottom:28px;">
        <p style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#C9A84C;margin:0 0 10px;">Middleman CEO — Payment Alert</p>
        <h1 style="font-size:26px;color:#fff;margin:0;font-weight:700;">Payment Received</h1>
        <p style="color:#666;font-size:13px;margin:8px 0 0;">💳 Customer completed checkout via Square</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
          <td style="padding:12px 0;color:#888;font-size:13px;width:140px;">Full Name</td>
          <td style="padding:12px 0;color:#fff;font-size:15px;font-weight:600;">${name}</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
          <td style="padding:12px 0;color:#888;font-size:13px;">Phone</td>
          <td style="padding:12px 0;color:#C9A84C;font-size:15px;font-weight:600;">${phone}</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
          <td style="padding:12px 0;color:#888;font-size:13px;">Email</td>
          <td style="padding:12px 0;color:#C9A84C;font-size:15px;font-weight:600;">${email}</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
          <td style="padding:12px 0;color:#888;font-size:13px;">Package</td>
          <td style="padding:12px 0;color:#fff;font-size:14px;font-weight:600;">${pkg || 'N/A'}</td>
        </tr>
        ${amount ? `<tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
          <td style="padding:12px 0;color:#888;font-size:13px;">Amount</td>
          <td style="padding:12px 0;color:#C9A84C;font-size:15px;font-weight:700;">$${amount}</td>
        </tr>` : ''}
        <tr>
          <td style="padding:12px 0;color:#888;font-size:13px;">Timestamp</td>
          <td style="padding:12px 0;color:#fff;font-size:13px;">${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</td>
        </tr>
      </table>
      <div style="margin-top:28px;padding:18px;background:rgba(201,168,76,0.07);border-left:3px solid #C9A84C;">
        <p style="color:#C9A84C;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin:0 0 6px;font-weight:700;">Next Step</p>
        <p style="color:#ccc;font-size:13px;margin:0;line-height:1.6;">Verify payment in your Square Dashboard, then reach out to <strong style="color:#fff;">${name}</strong> within 24 hours — <strong style="color:#fff;">${phone}</strong> / <strong style="color:#fff;">${email}</strong>.</p>
      </div>
      <p style="color:#444;font-size:11px;margin-top:24px;text-align:center;">Middleman CEO Payment System · middlemanceo.com</p>
    </div>
  `

  // Save to MongoDB (non-blocking)
  Payment.create({ name, email, phone, package: pkg, amount }).catch(err =>
    console.error('DB save error (payment):', err.message)
  )

  try {
    await transporter.sendMail({
      from: `"Middleman CEO Payments" <${process.env.EMAIL_USER}>`,
      to: RECIPIENT,
      subject: `💳 Payment Confirmed: ${name} — ${pkg || 'Unknown Package'}`,
      html,
    })
    console.log(`Payment saved & emailed: ${name} | ${pkg} | $${amount}`)
    res.json({ success: true })
  } catch (err) {
    console.error('Payment email error:', err.message)
    res.status(500).json({ success: false, error: 'Failed to send email' })
  }
})

const sourceLabels = {
  video_gate:    '🎬 Tried to watch the video',
  package_click: '💰 Clicked a pricing package',
  exit_intent:   '🚪 Exit intent triggered',
  floating_cta:  '💬 Clicked "Got Questions?" button',
}

app.post('/api/lead', async (req, res) => {
  const { name, phone, email, source, package: pkg } = req.body

  if (!name || !phone || !email) {
    return res.status(400).json({ success: false, error: 'Missing fields' })
  }

  const sourceLabel = sourceLabels[source] || source
  const packageLine = pkg ? `<tr><td style="padding:8px 0;color:#888;font-size:13px;">Package Interest</td><td style="padding:8px 0;color:#fff;font-size:13px;font-weight:600;">${pkg}</td></tr>` : ''

  const html = `
    <div style="background:#080808;padding:40px 32px;font-family:'Helvetica Neue',sans-serif;max-width:560px;margin:0 auto;border:1px solid rgba(201,168,76,0.3);">
      <div style="border-top:3px solid #C9A84C;padding-top:28px;margin-bottom:28px;">
        <p style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#C9A84C;margin:0 0 10px;">Middleman CEO — New Lead</p>
        <h1 style="font-size:26px;color:#fff;margin:0;font-weight:700;">New Lead Captured</h1>
        <p style="color:#666;font-size:13px;margin:8px 0 0;">${sourceLabel}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
          <td style="padding:12px 0;color:#888;font-size:13px;width:140px;">Full Name</td>
          <td style="padding:12px 0;color:#fff;font-size:15px;font-weight:600;">${name}</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
          <td style="padding:12px 0;color:#888;font-size:13px;">Phone</td>
          <td style="padding:12px 0;color:#C9A84C;font-size:15px;font-weight:600;">${phone}</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
          <td style="padding:12px 0;color:#888;font-size:13px;">Email</td>
          <td style="padding:12px 0;color:#C9A84C;font-size:15px;font-weight:600;">${email}</td>
        </tr>
        ${packageLine}
        <tr>
          <td style="padding:12px 0;color:#888;font-size:13px;">Submitted</td>
          <td style="padding:12px 0;color:#fff;font-size:13px;">${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</td>
        </tr>
      </table>
      <div style="margin-top:28px;padding:18px;background:rgba(201,168,76,0.07);border-left:3px solid #C9A84C;">
        <p style="color:#C9A84C;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin:0 0 6px;font-weight:700;">Action Required</p>
        <p style="color:#ccc;font-size:13px;margin:0;line-height:1.6;">Follow up with <strong style="color:#fff;">${name}</strong> within 24 hours. Call <strong style="color:#fff;">${phone}</strong> or email <strong style="color:#fff;">${email}</strong>.</p>
      </div>
      <p style="color:#444;font-size:11px;margin-top:24px;text-align:center;">Middleman CEO Lead System · middlemanceo.com</p>
    </div>
  `

  // Save to MongoDB (non-blocking — email still sends even if DB fails)
  Lead.create({ name, phone, email, source, package: pkg }).catch(err =>
    console.error('DB save error (lead):', err.message)
  )

  try {
    await transporter.sendMail({
      from: `"Middleman CEO Leads" <${process.env.EMAIL_USER}>`,
      to: RECIPIENT,
      subject: `🔥 New Lead: ${name} — ${sourceLabel}`,
      html,
    })
    console.log(`Lead saved & emailed: ${name} | ${phone} | ${email} | ${source}`)
    res.json({ success: true })
  } catch (err) {
    console.error('Email error:', err.message)
    res.status(500).json({ success: false, error: 'Failed to send email' })
  }
})

// Serve built React frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')))
  app.get('/{*path}', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'))
  })
}

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
