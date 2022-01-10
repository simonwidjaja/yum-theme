import Layout from '@@components/Layout'
import {CardSet, Section, Container, Row, Col, Spacer, Headline, Button, Pill, HeadlineAndText, Separator, ImageAndText, Claim, WorkshopTeaser} from '@@yum'
import CallToAction1 from '../themes/yum/components/content/CallToAction1';

export default function index(props) {
  return (
    <Layout global={props.global}>

      <Spacer height="120"></Spacer>

      <Container style={{textAlign: 'center'}}>
        <Headline type="h1">WIP</Headline>
      </Container>

      <Container>
        <CallToAction1></CallToAction1>
      </Container>

      <Container>
        <CardSet cards={[
          {
            icon: "/themes/yum/wip/message.svg",
            title: "Erstgespräch",
            text: "Gemeinsam analysieren wir den Bedarf und lokalisieren Potentiale. Wir schauen uns inspirierende Beispiele an und entwickeln im Sparring den Schlachtplan.",
            bgColor: "#7955DC",
          },
          {
            icon: "/themes/yum/wip/lamp.svg",
            title: "Konzept und Storyboard",
            text: "Wir erarbeiten in enger Abstimmung das Feinkonzept sowie Storyboard und definieren Tasks und Meilensteine.",
            bgColor: "#F03F65",
          },
          {
            icon: "/themes/yum/wip/lamp.svg",
            title: "Added",
            text: "Wir erarbeiten in enger Abstimmung das Feinkonzept sowie Storyboard und definieren Tasks und Meilensteine.",
            bgColor: "var(--purple-lightest)",
          },
        ]}/>
      </Container>

      <Container>
        <CallToAction1 title="Ready for the next level?">
          My custom text
          <Spacer height="40" />
          <Button inverted>Start now</Button>
        </CallToAction1>
      </Container>

    </Layout>
  )
}



////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////
