import { useState } from 'react';
import './App.css';
import QRCodeGen from './QRCodeGen';
import QRCodeLink from 'qrcode';

function App() {
  const [info, setInfo] = useState('')
  const [download, setDownload] = useState('')

  function handleQRCode(e) {
    setInfo(e.target.value)
    handleGenerate(e.target.value)
  }

  function handleGenerate(info_hook) {
    QRCodeLink.toDataURL(info_hook, {
      width: 600,
      margin: 2,
    }, function (err, hook) {
      setDownload(hook)
    })
  }

  return (
    <div className="App">
      <div className='container'>
        <input className='input' value={info} onChange={handleQRCode}></input>
        <div className='qrcode'>
          {info ? (<QRCodeGen info={info} />) : (<h2 className='qrcode-space'>Type or paste to generate your amazing QRCode</h2>)}
        </div>
        <a href={download} download={`qrcode.png`}>Download QRCode</a>
      </div>
    </div>
  );
}

export default App;
