// import { Menubar } from 'primereact/menubar';
import Link from 'next/link';
import styled from 'styled-components'
import React, {useState, useEffect, useRef, useCallback} from 'react'
import useResizeObserver from '../hooks/useResizeObserver';

export default function Navigation(props) {
 
  const resizeObserver = useResizeObserver();

  return (
    <Component className="Navigation">

      <div className="content-spacer" style={{height: resizeObserver.height}}></div>
      
      <div ref={resizeObserver.ref} className="fixed-nav">

        {props.config.preNavigationRibbon}
        
        <nav className="container">
          MENUBAR
          {/* <Menubar className="primary-navigation"
            model={props.config.primaryNavigation}
            start={
              <Link href="/">
                <div>
                  {props.config.site.brand}
                </div>
              </Link>}
            // end={<PrimeButton label="Logout" icon="pi pi-power-off"/>}
            >
          </Menubar> */}
        </nav>
      </div>

    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`

  .content-spacer {
    min-height: 80px;
  }

  .fixed-nav {
    position: fixed;
    top: 0; right: 0; left: 0;
    z-index: 9;
    background-color: var(--navigation_background);
    box-shadow: 0 20px 30px 0 rgb(28 9 60 / 10%);
    nav {
      display: flex;
      min-height: 80px;

      .primary-navigation {
        width: 100%;
        max-width: 1110px;
        /* justify-content: space-around; */
        justify-content: space-between;
        padding: 2px 6px;
        background-color: transparent;
        border: none;
        border-radius: 0;
    
        .p-menubar-button{
          text-decoration: none !important;
          background-color: var(--gray-light);
        }

        .p-menuitem-link {
          align-items: flex-start;
          .p-menuitem-icon {
            flex: 0 0 20px;
          }
        }

        .p-menubar-end {
          margin-left: 10px !important;
        }
    
        * {
          color: var(--navigation_color) !important;
        }
    
        // Primary Items
        .p-menubar-root-list {
          > .p-menuitem {
            .p-menuitem-link {
              box-shadow: none !important;
              border-radius: 0;
              border-bottom: 2px solid transparent;
      
              background: transparent !important;
              &:hover {
                border: none;
                background: transparent !important;
                border-bottom: 2px solid var(--navigation_color);
              }
            }
          }
        }
    
        // Sub items
        .p-submenu-list {
          min-width: 200px;
          width: auto;
          .p-menuitem {
            * {
              color: black !important;
            }        
            .p-menuitem-active {
              a {
                background-color: white !important;
                color: black !important;
                opacity: 0.8;
                &:hover {
                  opacity: 1;
                }
              }
            }
            .yumtastic-product {
              cursor: pointer;
              svg {
                margin: 0 10px;
                padding: 0;
                width: 460px;
                height: 70px;
                cursor: pointer;
              }
              border-left: 2px solid transparent;
              &:hover {
                border-left: 2px solid black;
              }
            }
            .spacer-s {
              height: 10px;
            }
            .spacer-m {
              height: 20px;
            }
            .spacer-l {
              height: 30px;
            }
          }
        }
    


        // Mobile
        &.p-menubar-mobile-active {
          * {
            color: black !important;
          }


        }
      }
    }
  }
`
