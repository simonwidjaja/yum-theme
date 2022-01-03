import { Container as BsContainer, Row, Col, Nav, NavDropdown } from 'react-bootstrap';

export default function Container(props) {
  const className = props.className ? props.className : '';
  const style = props.style ? props.style : {};  
  return (
    <BsContainer className={"Container "+className} style={style} fluid={props.fluid}>
      {props.children}
    </BsContainer>
  )
}