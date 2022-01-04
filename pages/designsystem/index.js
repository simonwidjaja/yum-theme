import Layout from '@@components/Layout'
import styled from 'styled-components'
import {CallToAction1, Section, Container, Row, Col, Spacer, Headline, Button, Pill, HeadlineAndText, Separator, ImageAndText, Claim, WorkshopTeaser} from '@@yum'
import Link from 'next/link'

export default function index(props) {
  return (
    <Layout global={props.global}>
      <Component>

        <Spacer height="100"></Spacer>

        <Container style={{textAlign: 'center'}}>
          <Headline type="h1">Yum Design System</Headline>
        </Container>

        <Container>
          <Row>
            <Col>
              <Link href="/designsystem/variables">Variables and Classes (Colors, Fonts etc.)</Link><br/>
              <Link href="/designsystem/components">Components</Link><br/>
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
`
