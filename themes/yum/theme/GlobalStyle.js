import { createGlobalStyle } from 'styled-components'
import { DefaultTheme } from './DefaultTheme'

export default createGlobalStyle`

  //---
  // Disable bootstraps XXL
  //---
  @media (min-width: 1400px) {
    .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
      // Remove Original  
      //max-width: 1320px; 
      max-width: 1140px !important;
    }  
  }

  //---
  // Global variables
  //---
  :root {
    
    //---
    // Lengths
    //---
    --xxl: 160px;
    --xl: 90px;
    --lg: 60px;
    --md: 32px;
    --sm: 24px;
    --xs: 12px;
    --xxs: 6px;
    --none: 0px;

    //---
    // Border radius
    //---
    --border-radius: 8px;
    --border-radius-xl: 32px;

    //---
    // Colors
    //---
    ${Object.keys(DefaultTheme.colors).map((key, value) => `--${key}: ${DefaultTheme.colors[key]};`)}

  }

  //---
  // Padddings and Margins
  //---
  .padding-top-xxl { padding-top: var(--xxl) !important; }
  .padding-top-xl  { padding-top: var(--xl)  !important; }
  .padding-top-lg   { padding-top: var(--lg)  !important; }
  .padding-top-md  { padding-top: var(--md)  !important; }
  .padding-top-sm  { padding-top: var(--sm)  !important; }
  .padding-top-xs  { padding-top: var(--xs)  !important; }
  .padding-top-xxs { padding-top: var(--xxs)  !important; }
  .padding-top-none { padding-top: var(--none)  !important; }

  .padding-bottom-xxl { padding-bottom: var(--xxl) !important; }
  .padding-bottom-xl  { padding-bottom: var(--xl)  !important; }
  .padding-bottom-lg   { padding-bottom: var(--lg)  !important; }
  .padding-bottom-md  { padding-bottom: var(--md)  !important; }
  .padding-bottom-sm  { padding-bottom: var(--sm)  !important; }
  .padding-bottom-xs  { padding-bottom: var(--xs)  !important; }
  .padding-bottom-xxs { padding-bottom: var(--xxs)  !important; }
  .padding-bottom-none { padding-bottom: var(--none)  !important; }

  .margin-top-xxl { margin-top: var(--xxl)  !important; }
  .margin-top-xl  { margin-top: var(--xl)  !important; }
  .margin-top-lg   { margin-top: var(--lg)  !important; }
  .margin-top-md  { margin-top: var(--md)  !important; }
  .margin-top-sm  { margin-top: var(--sm)  !important; }
  .margin-top-xs  { margin-top: var(--xs)  !important; }
  .margin-top-xxs { margin-top: var(--xxs)  !important; }
  .margin-top-none { margin-top: var(--none)  !important; }

  .margin-bottom-xxl { margin-bottom: var(--xxl)  !important; }
  .margin-bottom-xl  { margin-bottom: var(--xl)  !important; }
  .margin-bottom-lg   { margin-bottom: var(--lg)  !important; }
  .margin-bottom-md  { margin-bottom: var(--md)  !important; }
  .margin-bottom-sm  { margin-bottom: var(--sm)  !important; }
  .margin-bottom-xs  { margin-bottom: var(--xs)  !important; }
  .margin-bottom-xxs { margin-bottom: var(--xxs)  !important; }
  .margin-bottom-none { margin-bottom: var(--none)  !important; }


  //---
  // Misc
  //---
  .textcenter, .textCenter, .text-center {
    text-align: center;
  }

  //---
  // Font classes
  //---
  .font-xxxl {
    ${DefaultTheme.mixin.font('primary', 'xxxl')};
  }
  .font-xxl {
    ${DefaultTheme.mixin.font('primary', 'xxl')};
  }
  .font-xl {
    ${DefaultTheme.mixin.font('primary', 'xl')};
  }
  .font-h1 {
    ${DefaultTheme.mixin.font('primary', 'h1')};
  }
  .font-h2 {
    ${DefaultTheme.mixin.font('primary', 'h2')};
  }
  .font-h3 {
    ${DefaultTheme.mixin.font('primary', 'h3')};
  }
  .font-h4 {
    ${DefaultTheme.mixin.font('primary', 'h4')};
  }
  .font-p {
    ${DefaultTheme.mixin.font('primary', 'p')};
  }
  .font-sm {
    ${DefaultTheme.mixin.font('primary', 'sm')};
  }
  .font-xs {
    ${DefaultTheme.mixin.font('primary', 'xs')};
  }
  .font2-xxxl {
    ${DefaultTheme.mixin.font('secondary', 'xxxl')};
  }  
  .font2-xxl {
    ${DefaultTheme.mixin.font('secondary', 'xxl')};
  }  
  .font2-xl {
    ${DefaultTheme.mixin.font('secondary', 'xl')};
  }  
  .font2-h1 {
    ${DefaultTheme.mixin.font('secondary', 'h1')};
  }
  .font2-h2 {
    ${DefaultTheme.mixin.font('secondary', 'h2')};
  }
  .font2-h3 {
    ${DefaultTheme.mixin.font('secondary', 'h3')};
  }
  .font2-h4 {
    ${DefaultTheme.mixin.font('secondary', 'h4')};
  }
  .font2-p {
    ${DefaultTheme.mixin.font('secondary', 'p')};
  }
  .font2-sm {
    ${DefaultTheme.mixin.font('secondary', 'sm')};
  }  
  .font2-xs {
    ${DefaultTheme.mixin.font('secondary', 'xs')};
  }  

  //---
  // General
  //---
  body {
    ${DefaultTheme.mixin.font('primary', 'p')};
  }
  a {
    /* color: inherit; */
    color: var(--accent2-dark);
    &:hover {
      color: var(--accent2-dark);
    }
  }
  h1, h2, h3, h4 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  //---
  // Inverted
  //---
  .inverted {
    color: var(--white);
  }

`;