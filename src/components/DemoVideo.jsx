import { useRef } from 'react'
import { BiH } from './Lang'

export default function DemoVideo({ lang }) {
  const wrapRef = useRef(null)

  function toggleFullscreen() {
    const el = wrapRef.current
    if (!el) return
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      (document.exitFullscreen || document.webkitExitFullscreen).call(document)
    } else {
      (el.requestFullscreen || el.webkitRequestFullscreen).call(el)
    }
  }

  return (
    <section className="demo-video" id="demo">
      <div className="container">
        <div className="section-header">
          <BiH level={2} lang={lang} en="See It In Action" he="צפו בהדגמה" />
        </div>
        <div className="video-cinema" ref={wrapRef}>
          <div className="video-glow" />
          <video
            controls
            playsInline
            preload="metadata"
            className="video"
          >
            <source src="/recordings/Demo2Final.mp4" type="video/mp4" />
          </video>
          <button
            className="fs-btn"
            aria-label="Toggle fullscreen"
            onClick={toggleFullscreen}
          >⤢</button>
        </div>
      </div>
    </section>
  )
}
