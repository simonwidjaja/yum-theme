import styled from 'styled-components'
import { Form as BsForm } from 'react-bootstrap';

export default function FormGroup(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"FormGroup "+className} style={style}>
      <BsForm.Group>
        {props.children}
      </BsForm.Group>
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  /* border: 10px dashed; */
`
