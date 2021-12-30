import styled from 'styled-components'

export default function Pill(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"Pill "+className} style={style}>
      {props.children}
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  display: inline-block;
  padding: 6px 20px 4px;
  margin-right: 10px;
  ${props => props.theme?.mixin?.font('secondary','sm')}
  border: 1px solid black;
  border-radius: 100px;
  color: black;
`
