import React, { useEffect, useRef } from 'react'
import QRCode from 'qrcode'

export default function QRCodeGen({ info }) {
  const canvasReference =  useRef()

  useEffect(() => {
    QRCode.toCanvas(canvasReference.current, info, (error) => {console.log(error)})
  }, [info])

  return (
    <div>
        <canvas ref={canvasReference} id='canvas'></canvas>
    </div>
  )
}
