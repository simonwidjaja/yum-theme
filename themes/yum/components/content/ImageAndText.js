import { Container, Row, Col } from '../../index';
import styled from 'styled-components'

export default function ImageText(props) {
  let className = props.className ? props.className : '';
  className += (props.reversed) ? ' reversed' : '';
  const style = props.style ? props.style : {};
  props.background && Object.assign(style, {backgroundImage: `url(${props.background})`});
  const aspectRatio = props.aspectRatio ? 1/props.aspectRatio : 1/(16/9);
  return (
    <Component className={"ImageText "+className} style={style}>
      <Container>
        <Row>
          <Col lg={props.reversed ? {offset: 0, span: 6} : {offset: 0, span: 6}} className="firstCol">
            <div className="frameWrapper" style={{paddingTop: aspectRatio*100+`%`}}>
              {props.image && <div className="image" style={{backgroundImage: `url(${props.image})`}}></div>}
            </div>
          </Col>
          <Col lg={props.reversed ? {offset: 0, span: 5} : {offset: 0, span: 6}} className="secondCol">
            { props.title && <h2 className="title font-h3">{props.title}</h2> }
            <div>{props.body}</div>
          </Col>
        </Row>      
      </Container>
    </Component>
  )
}

////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`

  padding: 0px 0;

  .firstCol {
    display: flex;
    ${props => props.theme?.mq?.min('lg')} {
      justify-content: center;
    }
  }
  .secondCol {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .frameWrapper {
    position: relative;
    width: 100%;
    .image {
      position: absolute;
      top: 0;
      right: 15px;
      bottom: 0;
      left: 15px;
      background-position: center 0;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  .title {
    margin-top: 40px;
    ${props => props.theme?.mq?.min('lg')} {
      margin-top: 0;
    }
  }

  // Swap image and text columns
  &.reversed {
    .row {
      flex-direction: row-reverse;
    }
  }  
`
