import React, { useRef, useEffect } from 'react'
import * as iink from 'iink-js'

function App() {
  const editorRef = useRef(null)
  const editorStyle = {
    'minWidth': '100px',
    'minHeight': '100px',
    'width': '100vw',
    'height': 'calc(100vh - 190px)',
    'touchAction': 'none',
  }

  useEffect(() => {
    let editor = editorRef.current
    editor = iink.register(editorRef.current, {
      recognitionParams: {
        type: 'TEXT',
        protocol: 'WEBSOCKET',
        apiVersion: 'V4',
        server: {
          // scheme: 'https',
          // host: 'webdemoapi.myscript.com',
          applicationKey: 'facd729f-6f24-4cee-b10c-cb20754ab2e7',
          hmacKey: 'f75fc245-7a8d-4594-abe8-8f42af2277de'
        },
      },
    })

    window.addEventListener('resize', () => { 
      editor.resize() 
    })

    window.addEventListener('exported', e => {
      // Pass the content to the native application calling this webview
      window.ReactNativeWebView?.postMessage(e?.detail?.exports?.['text/plain'] ?? '')
    })

    return () => {
      window.removeEventListener('resize', () => { editor.resize() })
      this.editor.close()
    }
  }, [])

  return (
    <div className="App">
      <div style={editorStyle} ref={editorRef} touch-action="none">
      </div>
    </div>
  )
}

export default App
