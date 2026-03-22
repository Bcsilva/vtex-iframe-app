import React, { useState } from 'react'
import style from './DynamicIframe.css'


function DynamicIframe({ id, src }) {
  const [response, setresponse] = useState(1024)
  useState(() => {
    window.addEventListener('message', function (e) {
      let res = JSON.parse(e.data)
      let _height = res.height
      if (!isNaN(_height) && _height !== undefined) {
        setresponse(_height < 1000 ? 1000 : _height)
      }
    })
  }, [])

  var iframeHeight = response + 'px'
  console.log(iframeHeight)
  return (
    <section className={style.DynamicIframeWrapper}>
      <iframe
        id={id}
        class={style.DynamicIframe}
        src={src}
        width="100%"
        height={`${iframeHeight}px`}
        frameborder="0"
        allowfullscreen="true"
        scrolling="no"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation"
        loading="lazy"
        csp></iframe>
    </section>
  )
}

export default DynamicIframe
