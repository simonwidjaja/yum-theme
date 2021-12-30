import styled from 'styled-components'

export default function Text(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"Text "+className} style={style}>
      {props.children}
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  margin-bottom: 40px;
`
