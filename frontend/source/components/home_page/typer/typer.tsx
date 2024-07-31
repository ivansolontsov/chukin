'use client'
import React from 'react'
import Script from 'next/script'
import './typer.scss';

export default function Typer_text() {
  return (
    <main>
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"></script>
      <Script src="/typer/script.js" />
      <div id="typed-strings">
        <span>- Це якисть</span>
        <span>- Це дизайн</span>
      </div>
      <div className="text-typing">
        <span>"Chukin🞄M"&nbsp;</span>
        <span id="typed"></span>
      </div>
      </main>
  )
}
