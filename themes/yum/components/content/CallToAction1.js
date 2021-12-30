import styled from 'styled-components'
import {Section, Container, Row, Col, Spacer, Headline, Button, Pill, HeadlineAndText, Separator, ImageAndText, Claim, Text, WorkshopTeaser} from '@@yum'

export default function CallToAction1(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"CallToAction1 inverted "+className} style={style}>
      <Row className="base">
        <Col xs={{offset: 1, span: 11}} lg={{offset: 1, span: 6}}>
          <Separator color="var(--white)" />
          <Headline type="h1">Worauf wartest Du?</Headline>
          <Text>Bringen wir gemeinsam Leben in Bude und erklären deine Dienstleistungen und emotionalisieren deine Produkte.</Text>
          <Text>Bringen wir gemeinsam Leben in Bude und erklären deine Dienstleistungen und emotionalisieren deine Produkte.</Text>
          <Button inverted>Kontaktiere uns</Button>
        </Col>
        <Col className="d-none d-lg-block">
          <div className="img-wrapper">
            <div className="Image"></div>
          </div>
        </Col>
      </Row>
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  .base {
    background-color: var(--purple);
    border-radius: var(--border-radius-xl);
    padding: 77px 0;
    margin-bottom: 140px;

    .img-wrapper {
      position: relative;
      height: 100%;
      .Image {
        position: absolute;
        width: 100%;
        height: 150%;
        background-image: url(/themes/yum/wip/yumshe_composition_bubble.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 50% 100%;
      }
    }
  }
`
