import styled from 'styled-components'
import Separator from '../core/Separator'

export default function Claim(props) {
  let className = props.className ? props.className : '';
  className += (props.inverted) ? 'inverted' : '';
  const style = props.style ? props.style : {};
  return (
    <Component className={"Claim "+className} style={style} {...props}>
      <h2 className="margin-bottom-none">{props.title}</h2>
      <Separator></Separator>
      <h1 className="margin-top-none">{props.children}</h1>
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  margin: 60px 0;
  padding: 80px 0;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  background-color: ${props => props.backgroundColor};
  text-align: center;

  h1 {
    ${props => props.theme?.mixin?.font('primary','h1')}
  }
  
  h2 {
    ${props => props.theme?.mixin?.font('secondary', 'h3')}
  }

  hr {
    display: inline-block;
    width: 100px;
    height: 6px;
    margin: 30px inherit;
    border: none;
    opacity: 1;
    background-color: var(--accent1); 
  }

  &.inverted {
    /* background-color: var(--accent1); */
    color: var(--white);
  }
`