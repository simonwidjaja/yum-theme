// import { Container as BsContainer, Row, Col, Nav, NavDropdown } from 'react-bootstrap';

export default function Container(props) {
  const className = props.className ? props.className : '';
  const style = props.style ? props.style : {};  
  return (
    <div>TEST</div>
    // <BsContainer className={"container Container "+className} style={style}>
    //   {props.children}
    // </BsContainer>
  )
}