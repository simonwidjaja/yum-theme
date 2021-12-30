import styled from 'styled-components'

/**
 * Button
 * @param {*} props 
 * @param {String} [props.type] HTML button type (default: 'button'). Set this to 'submit' if button sends a form
 * @param {String} [props.href] Link href
 * @param {Boolean} [props.disabled] HTML button attribute 'disabled'
 * @param {Function} [props.onClick] Click Function 
 * @param {Boolean} [props.small] Small
 * @param {Boolean} [props.shy] Shy (no cta/jump/pulse animation)
 * @returns 
 */
export default function Button(props) {
  const className = props.className ? props.className : '';
  const style = props.style ? props.style : {};

  const btn = (
    <button className="pushable" onClick={props.disabled ? null : props.onClick} type={props.type || 'button'} disabled={props.disabled}>
      <span className="shadow"></span>
      <span className="edge"></span>
      <div className="front">
        <div className="label">{props.children}</div>
        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="11.593" height="21.186" viewBox="0 0 11.593 21.186">
            <g id="Group_69" data-name="Group 69" transform="translate(3538.247 -3952.086)">
              <path id="Path_259" data-name="Path 259" d="M-3506.547,3953.1l9.179,9.179-9.179,9.179" transform="translate(-30.286 0.399)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            </g>
          </svg>
        </div>
      </div>
    </button>    
  )

  return (
    <Component className={"Button "+className} style={style} color={props.color} backgroundColor={props.backgroundColor} props={props}>
      { props.href ? <a href={props.href}>{btn}</a> : <>{btn}</> }
    </Component>
  )
}

////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`

  --border-radius: 12px;
  --delay: 200ms;

  margin-top: 20px;
  margin-bottom: 20px;


  // TAKEN FROM https://www.joshwcomeau.com/animation/3d-button/
  .pushable {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    transition: filter 250ms;
    animation: ${props => props.props.shy ? null : 'cta 3s infinite'};
    animation-delay: var(--delay);

    &[disabled] {
      pointer-events: none;
      animation: none;
      filter: grayscale(1);
      opacity: .3;
      .icon svg {
      animation: none;
      }
    }
  }
  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    /* background: hsl(0deg 0% 0% / 0.2); */
    background: rgba(0,0,0,.3);
    will-change: transform;
    filter: blur(4px);
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(.3, .7, .4, 1);
  }
  .edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    /* background: linear-gradient(
      to left,
      hsl(340deg 100% 16%) 0%,
      hsl(340deg 100% 32%) 8%,
      hsl(340deg 100% 32%) 92%,
      hsl(340deg 100% 16%) 100%
    ); */
    /* background: #6d0186; */
    /* background: var(--accent1); */
    background: ${props => props.props.shy ? 'var(--gray-darkest)' : 'var(--accent1)'};
    filter: brightness(80%);
    will-change: transform;
  }
  .front {
    display: flex;
    justify-content: space-between;
    align-items: center;    
    position: relative;
    /* padding: 12px 12px; */
    padding: ${props => props.props.small ? '3px 3px' : '12px 12px'};
    border-radius: var(--border-radius);
    color: white;
    /* background: var(--accent1); */
    background: ${props => props.props.shy ? 'var(--gray-darkest)' : 'var(--accent1)'};
    will-change: transform;
    /* transform: translateY(-4px); */
    transform: ${props => props.props.shy ? 'translateY(0px)' : 'translateY(-4px)'};
    transition: transform 600ms cubic-bezier(.3, .7, .4, 1);
  }
  .pushable:hover {
    filter: brightness(120%);
    animation: cta-paused;
  }
  .pushable:hover .front {
    transform: translateY(-8px);
    transition: transform 250ms cubic-bezier(.3, .7, .4, 1.5);
  }
  .pushable:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  .pushable:hover .shadow {
    transform: translateY(8px);
    transition: transform 250ms cubic-bezier(.3, .7, .4, 1.5);
  }
  .pushable:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }
  .pushable:focus:not(:focus-visible) {
    outline: none;
  }


  // Added by simonwidjaja
  .label {
    flex: 1 1 100px;
    padding: 3px 20px 6px 30px;
    font-size: 1.2em;
    transition: 200ms;
    text-decoration: none;
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;      
    flex: 0 0 40px;
    width: 40px;
    height: 40px;
    /* background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAAXNSR0IArs4c6QAABvlJREFUeAHtnM9rI2UYx9+0J5euHdyr3Z2CCh7E7KKICnbqSVC2Uf+B7lmQehN0t0m7/kCEtixeREi1oqzgNvUsm+lF8CCbntRTUz1sb0633oqN3+/svGGazCSZSSfzTJMHnrzz/n6ezzzv+06GkJwSII1GIw8zJqFMDc8ky0uZZzmlBnXcK6VsL2We5Qe5XI7pcAogzkHL0F3oackuBipD59KimhvUxHDSxFwz0IKnSBKXCmagbiN664nPNogJADIPrULTlioMyA/C50TmgPEmtAyVJmUYZCbidBKDwlgDugKVLosw0EiCwamMSeOgNPIfaFaEti5CTw3sqRxKMMjEXdmEZnWPqsH2WRxcDtK+pG+ggEmIVajRlyXpdyZMQq31Y8pYP50Bcx7970GzDpMY6MM9zyfmY0lsoJh4BTOWY80qu1PZ8y2WlZGXPCbjnSTIQqwZs9OpAlOvRd1XIwH1YHK/zGeHS1+W1tCb+6rT6yhRlzwjc1hgkiF9jbSt9QwU0bmKwQucZcik4Pnek9s9LXkMOI/RIt2pnmbPViPup+vdTO4KFDAZ9nw0GnZxAID7aa0TiI5AAdNE57PynNmJQ691hDoNqEwDJXQPBUwDPTahTEfykABZVD02gUxCgaL1AjQf2Gu4C8mEbAIlcMl7d2AXPYzAXqNCBwgCl35YhBbRYQQzPHDIZiGoui1CEZ0mGjI6xcjeX3+7tly6OCXGJs8QRmndb1RQhBb9DdK8xs1VpeWP1Wuvz7nKa5YJkmKrLSciFMbm0UDMM+fK2i315Vcnv0+8Vbiqbi4tKkRGqy9p5S/Dlpqe/IRVAFpFhaUr00wfPDhUL7w8E2iCMKg2gM5qQ5tLHjBNFFq6Iu306Ogo1IQ7lZ/UhzdKUpa/5bFz7W0CRa4Q6kEKFRcuPKYKV98InZlQry8uh9YPuMLS8/mBNgt1ZdrpR8tFxeUdJj9uVtQH14sSIrUZjM09FGEr6vjUEI+PjxGJS4oRGSYS9lTsoy5LN0LBskk4zOi0ysfGxtRy6UbHSJWwp2qGesmLBcobmRGoLkMNNPj5JK2wDJg3A1BdhjmEah72i3mYD2B5okj4nnqZEWqcsFh4RnikGgRqCWfYZp5gqHm9h7YZLb1AKFQ3QjO15P03WiLU8WKx+D6MNP2GZumaz9Oz1itqf39f/f7Hn4Gms/z+/X316uxM0m+pcjzlbViRyGMT3xh9+tnn6ue7VXV4+G+gs4Ms5Avq299tqMnJR5OadptAdzG6mcQM77z7nrpb3U5i6NhjPvXkE2rrzg+x+3fpWCPQRpdGsauffuZK7L7JdWyo3379RZ0790giU2T2lI9Lo6Fy6vj4v7jdu/Yj0L2urWI24CEgTcypKTUxMZGUWTsEWk9q9E9uLrkna4IORDL94tTj6vb3G5H6RGzsJHrKRzQmdnNB3++3GaG12J4I6CgIJmnYBOoI4BLLBGEwXR8INJMiESZAOgRqZ42oUJjEWMvckhcMk0CdHD/xZamO5BKvJYtwmHt4UWPqPdSWDJK2CYdJE21+aKAVZqRKBmASncvQXfLMJfmShOPHlYzA5HtWl6WOUPq7FdfppPplBaafnR+onRSYuOOu3fpC/E9wPN+aW6Z/yZuo5MtmEdLp96E0UMLvmXygprHi68w3I9Qr2PY1SvWy0+9DhcHc1jBPAPXoLaRK0Td52O9D336zoPgzRzjha53qZWdmOO3XeeJLkfLXG438cy82rjz/UmP9m2+lmKXtWG+9lW23GS1NNBKzl9Jg5+BAjY+Nq/PnE3vTzmniyLR/uXOA5h6qR/MarOm8hNSYnJQIs9QKk6zaIpSFiFIDSR06CR1JO4EDFJkA6rRWtUUoG3gNV1sbj/JNAqtBMFkbGKGs8KLUxuWzzI+kSWAHV1ZkoOzuHVA1XI6WPoHgX3ShgUvdrcVH4JLXlbgLdVxbOj/kKWGGRqZm0xEoGwEqI/Sa7jDE6YLHoiOCrkDZGwOtI1nj9ZBKyWPQ1f3QQymoJ/bUCsrngurOcNkWYBZ69S8qUAMD29BhOfk7nuhBkHta8roj7pSDawu6pcvOcEofux5Crf5HAsrOhOotgbO8p5boI31tBZZoHnvqPPQsiQNn5vuBFmkPDZoIBuRRbkOz/vB/AB+4xGtIY0vkJd86k2cAoe601mUoT9vNfmHS376BchAYUkdiQUtQ3umsCG2lzYzMwe6XvRLCFsD/sy9CpQttNHr1K/V2MNaErgukSpvM1AHFNQDG56G2ALC0gXt9otL3Kd+rdXDGRFsLWoAO6uvrFuaqQG1vn8flGRUA5n8bc/nVoaclHItj8qalIgOL0E7eAQCXogHVKZtb/ICwXL874OONw0KI7X4+zNdwzW9wTFOV/wESc2YFHjtHzQAAAABJRU5ErkJggg==); */
    /* background-size: contain; */
    svg {
      animation: pulse 2s infinite;
    }
  }   

  // pulsate by simonwidjaja
  @keyframes pulse {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(4px);
    }
    100% {
      transform: translateX(0px);
    }
  }  
  @keyframes cta {
    0% {
      transform: translateY(0px);
    }
    80% {
      transform: translateY(0px);
    }
    85% {
      transform: translateY(-6px);
    }
    90% {
      transform: translateY(0px);
    }
    95% {
      transform: translateY(-2px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`
