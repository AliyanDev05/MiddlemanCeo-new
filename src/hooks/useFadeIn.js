import { useEffect, useRef } from 'react'

export function useFadeIn() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('on') },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return ref
}

export function useFadeInAll() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const elements = container.querySelectorAll('.fi')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on') })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )
    elements.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 5) * 0.07}s`
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return containerRef
}
