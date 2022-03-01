import styled from 'styled-components'
import CookieConsent from "react-cookie-consent";

import { Normalize } from 'styled-normalize'
import GlobalStyle from '../theme/GlobalStyle'
import Navigation from './Navigation'
import {useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import Head from 'next/head'

export default function Layout(props) {
  const style = props.style ? props.style : {};  
  const title = (props.page?.title ? props.page.title+' – ' : '') + props.config.site.title;


  useEffect(() => {
    // Add hubspot integration/tracking to the end of body
    if (!window.___hubspot_integration_loaded) {
      const script = document.createElement('script');
      script.setAttribute('async', '');
      script.setAttribute('defer', '');
      script.setAttribute('id', 'hs-script-loader');
      script.src = props.config.hubspotTrackingURL;
      document.querySelector("body").appendChild(script);
      window.___hubspot_integration_loaded = true;
    }
  }, [])

  return (
    <Component className={['Layout', 'section', props.className].join(' ')} style={style}>

      <Normalize />
      <GlobalStyle />

      <CookieConsent location="bottom"
                      buttonText="I understand"
                      cookieName="cookie-consent"
                      style={{ alignItems: "center", background: "rgba(10,11,14, 0.9)", padding: '20px 40px' }}
                      buttonStyle={{ backgroundColor: "#00E2B6", padding: '20px 40px'}}>
        <div style={{fontWeight: 'bold'}}>Cookies</div>
        <div style={{maxWidth: '1400px'}}>
          This website uses cookies to enhance the user experience. Visit our <a href="/about/privacy-and-terms" style={{color: '#00E2B6'}}>Privacy Policy</a> to learn more.
          By accepting or continuing to use the site, you agree to this use of cookies and data.
        </div>
        </CookieConsent>

      <Head>
        <title>{title}</title>
        <meta name="description" content={props.config.site.description}></meta>
        <meta name="keywords" content={props.config.site.keywords}></meta>
        <meta name="author" content={props.config.site.author}></meta>
        <meta property="og:title" content={title} />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;700;900&family=Bitter:ital,wght@0,400;0,700;1,400&family=Gamja+Flower&display=swap');
        </style>
        {/* GSAP */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/ScrollTrigger.min.js"></script>
        {/* Feather Icons: https://github.com/AT-UI/feather-font */}
        <link rel="stylesheet" type="text/css" href="//at.alicdn.com/t/font_o5hd5vvqpoqiwwmi.css" />
      </Head>

      
      <Navigation config={props.config}></Navigation>
 
      <main>
        {props.children}
      </main>

      <footer>
        {props.footer}
      </footer>

    </Component>
  )
};



////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  main {
    min-height: 100vh;
  }

  // Grid
  .p-grid {
    margin: 0;
  }
`