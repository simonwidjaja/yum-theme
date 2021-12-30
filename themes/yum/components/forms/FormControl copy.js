import styled from 'styled-components'
import { Form as BsForm } from 'react-bootstrap';

export default function FormControl(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"FormControl "+className} style={style}>
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
