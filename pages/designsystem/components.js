import Layout from '@@components/Layout'
import styled from 'styled-components'
import {CallToAction1, Section, Container, Row, Col, Spacer, Headline, Button, Pill, HeadlineAndText, Separator, Text, ImageAndText, Claim, WorkshopTeaser} from '@@yum'

export default function index(props) {
  return (
    <Layout global={props.global}>
      <Component>

        <Spacer height="120"></Spacer>

        <Container style={{textAlign: 'center'}}>
          <Headline type="h1">Components</Headline>
        </Container>

        <Container>
          <Row>
            <Col>
              <Separator />
              <Headline>I am the headline</Headline>
              <Text>This is a random teaser text that does not have any meaning. This is a random teaser text that does not have any meaning. This is a random teaser text that does not have any meaning. </Text>
              <Button>Download</Button>
              <Button inverted>Download</Button>
            </Col>
          </Row>
        </Container>
        
        <section className="margin-bottom-xl" style={{backgroundColor: 'var(--coal)'}}>
          <Container className="center">
            <Row>
              <Col>
                <Separator />
                <Headline inverted>I am the headline</Headline>
              </Col>
            </Row>
          </Container>
        </section>
        
        <Container>
          <CallToAction1 title="Ready for the next level?">
            This is a random teaser text that does not have any meaning. This is a random teaser text that does not have any meaning. 
            <Spacer height="40" />
            <Button inverted>Start now</Button>
          </CallToAction1>
          <CallToAction1 title="Ready for the next level?">
            This is a random teaser text that does not have any meaning. This is a random teaser text that does not have any meaning. 
            <Spacer height="40" />
            <Button inverted>Start now</Button>
          </CallToAction1>
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
