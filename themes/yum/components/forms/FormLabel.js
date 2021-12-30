import styled from 'styled-components'
import { Form as BsForm } from 'react-bootstrap';

export default function FormLabel(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"FormLabel "+className} style={style}>
      <BsForm.Label>
        {props.children}
      </BsForm.Label>
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  //
`
