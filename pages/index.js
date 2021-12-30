import Layout from '@@components/Layout'
import {Section, Container, Row, Col, Spacer, Headline, Button, Pill, HeadlineAndText, Separator, ImageAndText, Claim, WorkshopTeaser} from '@@yum'
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

      <Container style={{textAlign: 'center'}}>
        <Spacer height="100"/>
        WIP
      </Container>

    </Layout>
  )
}



////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////
