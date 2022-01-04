import Layout from '@@components/Layout'
import styled from 'styled-components'
import {HubspotForm, MetaLabel, XrayLabel, CallToAction1, Section, Container, Row, Col, Spacer, Headline, Button, Pill, HeadlineAndText, Separator, Text, ImageAndText, Claim, WorkshopTeaser} from '@@yum'
import Link from 'next/link'
import XrayNav from '../../themes/yum/components/internal/XrayNav'

export default function index(props) {
  return (
    <Layout global={props.global}>
      <Component>

        <Spacer height="100"></Spacer>

        <Container>
          <Link href="/designsystem/">Design System</Link>
        </Container>

        <Spacer height="100"></Spacer>

        <Container style={{textAlign: 'center'}}>
          <Headline type="h1">Components</Headline>
          <XrayNav />
        </Container>


        <Container>
          <Row>
            <Col>
              <XrayLabel>Pill (WIP)</XrayLabel>
              <Pill>Pill</Pill>

              <XrayLabel>MetaLabel</XrayLabel>
              <MetaLabel>META LABEL</MetaLabel>

              <XrayLabel>Separator</XrayLabel>
              <Separator />

              <XrayLabel>Headline</XrayLabel>
              <Headline>I am the headline</Headline>

              <XrayLabel>Text</XrayLabel>
              <Text>This is a random teaser text that does not have any meaning. This is a random teaser text that does not have any meaning. This is a random teaser text that does not have any meaning. </Text>
              
              <XrayLabel>Button</XrayLabel>
              <Button>Download</Button>
              <Button inverted>Download</Button>

            </Col>
          </Row>
        </Container>

        <Spacer height="100"></Spacer>
        <Container>
          <Row>
            <Col>
              <XrayLabel>Headline with meta</XrayLabel>
              <Headline meta="NEXT Level">I am the headline</Headline>
              <Text>This is a random teaser text that does not have any meaning. This is a random teaser text that does not have any meaning. This is a random teaser text that does not have any meaning. </Text>
            </Col>
          </Row>
        </Container>

        <XrayLabel>Section with Separator and Headline (inverted)</XrayLabel>
        <section className="margin-bottom-xl padding-top-lg padding-bottom-lg" style={{backgroundColor: 'var(--coal)'}}>
          <Container className="center">
            <Row>
              <Col>
                <Separator />
                <Headline inverted>I am the headline</Headline>
              </Col>
            </Row>
          </Container>
        </section>
        
        <XrayLabel>CallToAction1</XrayLabel>
        <Container>
          <CallToAction1 title="Ready for the next level?">
            This is a random teaser text that does not have any meaning. This is a random teaser text that does not have any meaning. 
            <Spacer height="40" />
            <Button inverted>Start now</Button>
          </CallToAction1>
        </Container>
        
        <XrayLabel>HubspotForm</XrayLabel>
        <Container>
          <HubspotForm region="eu1" portalId="25408596" formId="c72ae9a0-25c5-4f62-be94-d62633802d3e" />
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
