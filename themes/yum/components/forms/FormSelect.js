import styled from 'styled-components'
import { Form as BsForm } from 'react-bootstrap';

export default function FormSelect(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"FormSelect "+className} style={style}>
      <BsForm.Control {...props}>
          {props.children}
      </BsForm.Control>
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  /* border: 10px dashed; */
`
