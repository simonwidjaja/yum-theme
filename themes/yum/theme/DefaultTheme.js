export var breakpoints = {
  xs: 0,
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'    
};

export var mq = {
  breakpoints,
  min: (size) => `@media (min-width: ${breakpoints[size]})`,
  max: (size) => `@media (max-width: ${breakpoints[size]})`,
  minMax: (minSize, maxSize) => `@media (min-width: ${breakpoints[minSize]}) and (max-width: ${breakpoints[maxSize]})`,

};

export var fonts = {
  primary: {
    family: 'Barlow, Arial, sans-serif',
    import: "@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;700;900&family=Bitter:ital,wght@0,400;0,700;1,400&family=Gamja+Flower&display=swap');"
  },
  secondary: {
    family: 'Bitter, serif',
    import: "@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@100;300;400;800&display=swap');"
  },
};

export var DefaultTheme = {
  colors: {
    'black': '#282C31',
    'white': '#FFFFFF',
    'light': '#F0F2F5',
    'lighter': '#F7F8FA',
    'gray-darkest': '#9BA4AF',
    'gray-darker': '#BDC4CC',
    'gray-dark': '#D0D5DB',
    'gray': '#E5E8ED',
    'gray-light': '#EFF3F5',
    'gray-lighter': '#F6F7FA',
    'gray-lightest': '#F8F9FB',
    'coal-dark': '#181B1F', 
    'coal': '#282c31', 
    'coal-light': '#32383E', 
    'accent1': '#81009e',
    'accent2': '#00E2B6',
    'accent2-dark': '#00bf9a',

    'navigation_background': '#FFF',
    'navigation_color': '#282C31',
  },
  fonts,
  mixin: {
    font: (type, size) => {
      switch (size) {
        case 'xxxl': return `
          font-family: ${fonts[type]?.family};
          font-weight: 800;
          font-size: 44px;
          line-height: 48px;
          ${mq.min('lg')} {
            font-size: 88px;
            line-height: 96px;
          }          
        `
        case 'xxl': return `
          font-family: ${fonts[type]?.family};
          font-weight: 800;
          font-size: 34px;
          line-height: 38px;
          ${mq.min('lg')} {
            font-size: 68px;
            line-height: 76px;
          }          
        `
        case 'xl': return `
          font-family: ${fonts[type]?.family};
          font-weight: 800;
          font-size: 30px;
          line-height: 34px;
          ${mq.min('lg')} {
            font-size: 54px;
            line-height: 60px;
          }   
        `
        case 'h1': return `
          font-family: ${fonts[type]?.family};
          font-weight: 800;
          font-size: 24px;
          line-height: 28px;
          ${mq.min('lg')} {
            font-size: 46px;
            line-height: 52px;
          }
        `
        case 'h2': return `
          font-family: ${fonts[type]?.family};
          font-weight: 800;
          font-size: 22px;
          line-height: 26px;
          ${mq.min('lg')} {
            font-size: 38px;
            line-height: 44px;
          }
        `
        case 'h3': return `
          font-family: ${fonts[type]?.family};
          font-weight: 800;
          font-size: 20px;
          line-height: 24px;
          ${mq.min('lg')} {
            font-size: 28px;
            line-height: 34px;
          }
        `
        case 'h4': return `
          font-family: ${fonts[type]?.family};
          font-weight: 800;
          font-size: 18px;
          line-height: 20px;
          ${mq.min('lg')} {
            font-size: 20px;
            line-height: 24px;
          }
        `
        case 'p': return `
          font-family: ${fonts[type]?.family};
          font-weight: 400;
          font-size: 18px;
          line-height: 26px;
          ${mq.min('lg')} {
            font-size: 18px;
            line-height: 26px;
          }
        `
        case 'sm': return `
          font-family: ${fonts[type]?.family};
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          ${mq.min('lg')} {
            font-size: 16px;
            line-height: 20px;
          }
        `
        case 'xs': return `
          font-family: ${fonts[type]?.family};
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          ${mq.min('lg')} {
            font-size: 14px;
            line-height: 18px;
          }
        `
              
      }
    }
  },
  mq
}


export default DefaultTheme