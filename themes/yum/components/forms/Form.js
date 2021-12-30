import styled from 'styled-components'
import { Form as BsForm } from 'react-bootstrap';

export default function Form(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <BsForm {...props} className={"Form "+className} style={style}>
      <Component>
        {props.children}
      </Component>
    </BsForm>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  /* background-color: var(--gray-lighter); */
  padding: var(--xl) 0;

  .validation-error {
    color: red;
  }
`
