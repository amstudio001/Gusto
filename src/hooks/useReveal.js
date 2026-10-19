import { useEffect } from 'react'

export default function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return
        if (e.target.classList.contains('rv')) e.target.classList.add('in')
        if (e.target.dataset.bg) {
          e.target.style.backgroundImage = `url(${e.target.dataset.bg})`
          delete e.target.dataset.bg
        }
        io.unobserve(e.target)
      }),
      { rootMargin: '300px', threshold: 0.12 }
    )
    document.querySelectorAll('.rv').forEach((el) => io.observe(el))
    const observeBackgrounds = (root) => {
      if (root.nodeType !== Node.ELEMENT_NODE) return
      if (root.matches('[data-bg]')) io.observe(root)
      root.querySelectorAll('[data-bg]').forEach((el) => io.observe(el))
    }
    document.querySelectorAll('[data-bg]').forEach((el) => io.observe(el))
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach(observeBackgrounds))
    })
    mutations.observe(document.body, { childList: true, subtree: true })
    return () => {
      io.disconnect()
      mutations.disconnect()
    }
  }, [])
}
