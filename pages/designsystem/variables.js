import Layout from '@@components/Layout'
import styled from 'styled-components'
import {CallToAction1, Section, Container, Row, Col, Spacer, Headline, Button, Pill, HeadlineAndText, Separator, ImageAndText, Claim, WorkshopTeaser} from '@@yum'
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function index(props) {

  const colors = [
    { name: 'coal', shades: ['coal', 'coal-lightest', 'coal-lighter', 'coal-light', 'coal-dark', 'coal-darker', 'coal-darkest'] },
    { name: 'purple', shades: ['purple', 'purple-lightest', 'purple-lighter', 'purple-light', 'purple-dark', 'purple-darker', 'purple-darkest'] },
    { name: 'french-rose', shades: ['french-rose', 'french-rose-lightest', 'french-rose-lighter', 'french-rose-light', 'french-rose-dark', 'french-rose-darker', 'french-rose-darkest'] },
  ];

  const [hex, set_hex] = useState({});

  useEffect(() => {
    const computedStyle = getComputedStyle(document.body);
    for (let i = 0; i < colors.length; i++) {
      const color = colors[i];
      for (let k = 0; k < color.shades.length; k++) {
        const shade = color.shades[k];
        hex[shade] = computedStyle.getPropertyValue(`--${shade}`);
      } 
    }
    set_hex( JSON.parse( JSON.stringify(hex) ) )
  }, []);

  return (
    <Layout global={props.global}>
      <Component>

        <Spacer height="100"></Spacer>

        <Container>
          <Link href="/designsystem/">Design System</Link>
        </Container>

        <Spacer height="100"></Spacer>

        <Container style={{textAlign: 'center'}}>
          <Headline type="h1">Colors</Headline>
        </Container>

        <Container>
          <Row>
            <Col>
              <div className="colors">
                {colors.map( color => {
                  return <div className="color-wrapper" key={'color-'+color.name}>
                    <h2>{color.name}</h2>
                    {color.shades.map( shade => {
                      return (
                        <div className="swatch-wrapper" key={'shade-'+shade}>
                          <div className="swatch" style={{backgroundColor: `var(--${shade})`}}></div>
                          <div className="details">
                            <div className="name">{shade}</div> 
                            <div className="hex">{hex[shade]}</div> 
                          </div>
                        </div>
                      )
                    })}
                  </div>
                })}
              </div>
            </Col>
          </Row>
        </Container>

        <Spacer height="100"/>



        <Container style={{textAlign: 'center'}}>
          <Headline type="h1">Font Classes</Headline>
        </Container>

        <Container>
          {
            (() => {
              const fontClasses = [
                {class: 'font-xxxl'},
                {class: 'font-xxl'},
                {class: 'font-xl'},
                {class: 'font-h1'},
                {class: 'font-h2'},
                {class: 'font-h3'},
                {class: 'font-h4'},
                {class: 'font-p'},
                {class: 'font-sm'},
                {class: 'font-xs'},
                {class: 'font2-xxxl'},
                {class: 'font2-xxl'},
                {class: 'font2-xl'},
                {class: 'font2-h1'},
                {class: 'font2-h2'},
                {class: 'font2-h3'},
                {class: 'font2-h4'},
                {class: 'font2-p'},
                {class: 'font2-sm'},
                {class: 'font2-xs'},
              ];
              return fontClasses.map(fontClass => { return (
                <div key={'font-class-'+fontClass.class}>
                  <div className={fontClass.class}>{fontClass.class}</div>
                </div>
              )})
            })()
          }
{/* 
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
  }             */}
        </Container>

      </Component>
    </Layout>
  )
}




////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  .colors {
    display: flex;
    justify-content: space-between;
    h2 {
      margin-bottom: 30px;
    }
    .color-wrapper {
      .swatch-wrapper {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
  
        .swatch {
          width: 60px;
          height: 60px;
          border-radius: var(--border-radius);
          margin-right: 10px;
        }
        .name {
          font-weight: 600;
        }
        .hex {
          color: #BBB;
        }
      }
    }
  }
`
