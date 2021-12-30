import Layout from '@@components/Layout'
import styled from 'styled-components'
import {CallToAction1, Section, Container, Row, Col, Spacer, Headline, Button, Pill, HeadlineAndText, Separator, ImageAndText, Claim, WorkshopTeaser} from '@@yum'

export default function index(props) {
  return (
    <Layout global={props.global}>
      <Component>

        <Spacer height="120"></Spacer>

        <Container style={{textAlign: 'center'}}>
          <Headline type="h1">Colors</Headline>
        </Container>

        <Container>
          <Row>
            <Col>
              <div className="item">
                <div className="color" style={{backgroundColor: 'var(--purple-lightest)'}}></div>
                <div className="color" style={{backgroundColor: 'var(--purple-lighter)'}}></div>
                <div className="color" style={{backgroundColor: 'var(--purple-light)'}}></div>
                <div className="color" style={{backgroundColor: 'var(--purple)'}}></div>
                <div className="color" style={{backgroundColor: 'var(--purple-dark)'}}></div>
                <div className="color" style={{backgroundColor: 'var(--purple-darker)'}}></div>
                <div className="color" style={{backgroundColor: 'var(--purple-darkest)'}}></div>
              </div>
            </Col>
          </Row>
        </Container>

      </Component>
    </Layout>
  )
}




////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  .item {
    .color {
      width: 100px;
      height: 100px;
      border-radius: var(--border-radius);
    }
  }
`
