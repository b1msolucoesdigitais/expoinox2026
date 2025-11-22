'use client'

import Script from 'next/script'

/**
 * Componente centralizado para scripts de tracking/analytics.
 *
 * Aqui você pode adicionar:
 * - Google Analytics / GA4
 * - Google Tag Manager
 * - Meta Pixel (Facebook)
 * - Outros pixels e ferramentas de terceiros
 *
 * Basta descomentar os blocos abaixo e colar os códigos fornecidos
 * pelas plataformas, mantendo apenas UM Script por integração.
 */

export default function AnalyticsScripts() {
  return (
    <>
      {/* Google Tag Manager / Google Analytics */}
      {/*
      <Script
        id="gtm-base"
        strategy="afterInteractive"
      >
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-XXXXXXX');`}
      </Script>
      */}

      {/* Meta Pixel (Facebook) */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '641750785344051');
        fbq('track', 'PageView');`}
      </Script>

      {/* Meta Pixel noscript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=641750785344051&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      {/* Outros scripts de terceiros podem ser adicionados aqui */}
    </>
  )
}


