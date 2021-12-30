import styled from 'styled-components'

/**
 * Button
 * @param {*} props 
 * @param {String} [props.href] Link href
 * @param {Function} [props.onClick] Click Function 
 * @returns 
 */
export default function Button(props) {
  const className = props.className ? props.className : '';
  const style = props.style ? props.style : {};

  const btn = (
    <button onClick={props.onClick}>
      <div className="label">{props.children}</div>
      <div className="icon"></div>
    </button>    
  )

  return (
    <Component className={"Button "+className} style={style} color={props.color} backgroundColor={props.backgroundColor}>
      { props.href ? <a href={props.href}>{btn}</a> : <>{btn}</> }
    </Component>
  )
}

////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`

  // Force line break
  &::before {
    content: '\\A';
  }
  display: block;
  margin: 20px 0;
  width: fit-content;
  a {
    text-decoration: none;
    width: auto;
  }
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border: none;
    border-radius: 25px;
    background-color: ${props => props.backgroundColor || 'var(--accent2)'};
    color: ${props => props.color || 'var(--black)'};
    cursor: pointer;
    
    .label {
      flex: 1 1 100px;
      padding: 6px 30px;
      ${props => props.theme?.mixin?.font('primary', 'p')}
      transition: 200ms;
      text-decoration: none;
    }

    .icon {
      flex: 0 0 40px;
      width: 40px;
      height: 40px;
      background-image: url(data:image/png;base64,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);
      background-size: contain;
    } 


    &:focus {outline:0;}
    &:hover {
      // transform: scale(1.03);
      .label {
        letter-spacing: 1px;
      }
      .icon {
        // filter: invert(1);
      }
    }
  }  
`
