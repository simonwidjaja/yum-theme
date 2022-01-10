import Layout from '@@components/Layout'
import styled from 'styled-components'
import {CardSet, HubspotForm, List, MetaLabel, XrayLabel, CallToAction1, Section, Container, Row, Col, Spacer, Headline, Button, Pill, HeadlineAndText, Separator, Text, ImageAndText, Claim, WorkshopTeaser} from '@@yum'
import * as yum from '@@yum'
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
          <HubspotForm 
            title="Exklusive Inhalte, Tricks und kostenlose Goodies" 
            sub="Melde Dich zu unserem Newsletter an" 
            consent="en" 
            region="eu1" portalId="25446583" formId="cb92614e-b5e4-4690-9871-b80ab7b498f3" />
        </Container>
        
        <XrayLabel>List</XrayLabel>
        <Container>
          <Headline className="margin-bottom-md">A default list</Headline>
          <List items={[
            "Custom Characters",
            "Custom Characters",
            "Custom Characters and Explanatory VideosCustom Characters and Explanatory Videos Custom Characters and Explanatory VideosCustom Characters and Explanatory Videos",
            "Custom Characters",
          ]} />

          <Headline className="margin-bottom-md">A default list</Headline>
          <List items={[
            "Custom Characters",
            "Custom Characters",
            "Custom Characters and Explanatory VideosCustom Characters and Explanatory Videos Custom Characters and Explanatory VideosCustom Characters and Explanatory Videos",
            "Custom Characters",
          ]} iconBaseColor="var(--purple)" iconColor="var(--coal)" />
        </Container>

        <XrayLabel>CardSet</XrayLabel>
        <Container>
          <CardSet cards={[
            {
              // icon: "/themes/yum/wip/message.svg",
              title: "Erstgespräch",
              text: "Gemeinsam analysieren wir den Bedarf und lokalisieren Potentiale. Wir schauen uns inspirierende Beispiele an und entwickeln im Sparring den Schlachtplan.",
              bgColor: "var(--purple)",
            },
            {
              // icon: "/themes/yum/wip/lamp.svg",
              title: "Konzept und Storyboard",
              text: "Wir erarbeiten in enger Abstimmung das Feinkonzept sowie Storyboard und definieren Tasks und Meilensteine.",
            },
            {
              // icon: "/themes/yum/wip/lamp.svg",
              title: "Added",
              text: "Wir erarbeiten in enger Abstimmung das Feinkonzept sowie Storyboard und definieren Tasks und Meilensteine.",
              bgColor: "var(--purple)",
            },
          ]}/>
        </Container>

        <XrayLabel>Testimonial</XrayLabel>
        <Container>
          <yum.Testimonial image="/images/testimonial_sandro_jenny.png" name="Sandro Jenny, Projektleiter, w-vision AG">
            Ein sehr spannender und praxisnaher Workshop zum Thema Webanimationen mit Adobe XD und Hero Plugin. Wir lernten in Kürze die einfachsten Wege kennen, um ohne grosse Programmier-Kenntnisse interaktive Webanimationen erstellen zu können. So macht Lernen Spass.
          </yum.Testimonial>
        </Container>        

        <XrayLabel>CallToActionDuo</XrayLabel>
        <yum.CallToActionDuo items={[
          {
            title: "Lorem ipsum dolor sit amet consectetur",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur quia exercitationem, assumenda possimus consequuntur blanditiis commodi totam sapiente pariatur tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur quia exercitationem, assumenda possimus consequuntur blanditiis commodi totam sapiente pariatur tempora.",
            buttonLabel: "Anfragen",
            baseColor: "var(--white)",
            inverted: false,
          },
          {
            title: "Lorem ipsum dolor sit amet consectetur",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur quia exercitationem, assumenda possimus consequuntur blanditiis commodi totam sapiente pariatur tempora.",
            buttonLabel: "Anfragen",
            baseColor: "var(--purple)",
            inverted: true,
          },
        ]} />

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
