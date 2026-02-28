import { useRef } from 'react'
import { BiH } from './Lang'

export default function DemoVideo({ lang }) {
  const wrapRef = useRef(null)
  const videoRef = useRef(null)

  function isFullscreen() {
    return Boolean(document.fullscreenElement || document.webkitFullscreenElement)
  }

  function toggleFullscreen() {
    const container = wrapRef.current
    if (!container) return
    if (!isFullscreen()) {
      if (container.requestFullscreen) container.requestFullscreen()
      else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen()
    } else {
      if (document.exitFullscreen) document.exitFullscreen()
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen()
    }
  }

  return (
    <section className="demo-video" id="demo">
      <div className="container">
        <div className="section-header">
          <BiH level={2} lang={lang} en="Demo Video" he="סרטון הדגמה" />
        </div>
        <div className="video-wrap" ref={wrapRef}>
          <video
            ref={videoRef}
            controls
            playsInline
            muted
            preload="metadata"
            poster="assets/logo.png"
            className="video"
          >
            <source src="recordings/Demo2Final.mp4" type="video/mp4" />
            Your browser does not support the video tag.
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
