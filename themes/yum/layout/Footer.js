import styled from 'styled-components'

export default function Footer(props) {
  const className = props.className ? props.className : '';
  const style = props.style ? props.style : {};
  return (
    <Component className={"Footer "+className} style={style}>
      {props.children}
    </Component>
  )
}

////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  
  ${props => props.theme?.mixin?.fontXL};

  padding: 40px;
  background-color: ${props => props.theme?.colors?.black};
  color: ${props => props.theme?.colors?.white};
  font-size: 16px;
  a {
    color: ${props => props.theme?.colors?.white};
  }
`