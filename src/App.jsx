import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import GoldDivider from './components/GoldDivider'
import WhatIf from './components/WhatIf'
import VideoSection from './components/VideoSection'
import HowItWorks from './components/HowItWorks'
import Numbers from './components/Numbers'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import LeadModal from './components/LeadModal'
import ExitIntentPopup from './components/ExitIntentPopup'
import FloatingCTA from './components/FloatingCTA'
// import CongratulationsPage from './components/CongratulationsPage'
// import PaymentPage from './components/PaymentPage'

export default function App() {
  // Lead modal state
  const [modalOpen, setModalOpen]       = useState(false)
  const [modalSource, setModalSource]   = useState('package_click')
  const [selectedPackage, setSelectedPackage] = useState('')
  const [videoUnlocked, setVideoUnlocked] = useState(false)

  // After successful lead submission, execute the pending action
  const [pendingAction, setPendingAction] = useState(null)

  // Congratulations page (shown after user confirms payment)
  // const [paymentSuccess, setPaymentSuccess] = useState(false)
  // const [paidPackage, setPaidPackage]       = useState('')

  // Scroll-reveal (fade-in) setup
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on') })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )
    const timer = setTimeout(() => {
      document.querySelectorAll('.fi').forEach((el, i) => {
        el.style.transitionDelay = `${(i % 5) * 0.07}s`
        obs.observe(el)
      })
    }, 50)
    return () => { clearTimeout(timer); obs.disconnect() }
  }, [])

  // Open modal helpers
  function openModal(source, pkg = '', onSuccess = null) {
    setModalSource(source)
    setSelectedPackage(pkg)
    setPendingAction(() => onSuccess)
    setModalOpen(true)
  }

  function handleModalSuccess() {
    setModalOpen(false)
    if (pendingAction) {
      pendingAction()
      setPendingAction(null)
    }
  }

  // Video gate
  function handleWatchVideo() {
    const alreadyCaptured = sessionStorage.getItem('mmceo_lead_captured')
    if (alreadyCaptured) {
      setVideoUnlocked(true)
    } else {
      openModal('video_gate', '', () => setVideoUnlocked(true))
    }
  }

  // Pricing package click
  function handlePackageSelect(packageName) {
    const alreadyCaptured = sessionStorage.getItem('mmceo_lead_captured')
    if (alreadyCaptured) {
      // If already captured, just scroll to top or handle next step
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      openModal('package_click', packageName, () => {
        // After capture, user can continue — optionally redirect to payment
        console.log('Package selected after lead capture:', packageName)
      })
    }
  }

  // Floating CTA
  function handleFloatingCTA(source) {
    openModal(source)
  }

  // Payment button — gate with lead form, then redirect directly to Square (same tab)
  // Square should be configured to redirect back to this site after payment
  function handlePaymentSelect(packageLabel, paymentUrl) {
    const alreadyCaptured = sessionStorage.getItem('mmceo_lead_captured')
    if (alreadyCaptured) {
      window.location.href = paymentUrl
    } else {
      openModal('payment_gate', packageLabel, () => {
        window.location.href = paymentUrl
      })
    }
  }

  // if (paymentSuccess) {
  //   return <CongratulationsPage packageName={paidPackage} />
  // }

  return (
    <>
      <Nav />
      <Hero />
      <GoldDivider />
      <WhatIf />
      <GoldDivider />
      <VideoSection onWatchVideo={handleWatchVideo} videoUnlocked={videoUnlocked} />
      <GoldDivider />
      <HowItWorks />
      <GoldDivider />
      <Numbers />
      <GoldDivider />
      <Testimonials />
      <GoldDivider />
      <Pricing onPaymentSelect={handlePaymentSelect} />
      <FinalCTA />
      <Footer />

      {/* Lead capture modal (video gate + package clicks + floating CTA) */}
      <LeadModal
        isOpen={modalOpen}
        source={modalSource}
        packageName={selectedPackage}
        onClose={() => setModalOpen(false)}
        onSuccess={handleModalSuccess}
      />

      {/* Exit intent popup — blocked while any modal is already open */}
      <ExitIntentPopup
        onLeadCaptured={() => sessionStorage.setItem('mmceo_lead_captured', '1')}
        blockWhileOpen={modalOpen}
      />

      {/* Floating "Got Questions?" button — blocked while any modal is already open */}
      <FloatingCTA onOpen={handleFloatingCTA} blockWhileOpen={modalOpen} />
    </>
  )
}
