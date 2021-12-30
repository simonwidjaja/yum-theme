import Footer from '@@yum/layout/Footer'
import { Container, Row, Col, Spacer } from '@@yum'
import Link from 'next/link';
import styled from 'styled-components'

export default function FooterFunc(props) {
  return (
    <Footer>
      <Component>
        <Container>
          <Row>
            <Col lg={4}>
              <h1>Company</h1>
              <div>yumtastic Tools and Trainings</div>
              <div>by &copy; 2021 Trendspurt GmbH</div>
              <Link href="/contact">Contact</Link><br/>
              <Link href="/about/privacy-and-terms">Privacy and Terms of Use</Link><br/>
              <Link href="/about/legal">Legal Disclosure / Impressum</Link><br/>
            </Col>
            <Col lg={4}>
              <h1>Tools &amp; Resources</h1>
              <Link href="/hero">Hero for Adobe XD</Link><br/>
              <Link href="/toolbelt">Toolbelt for Adobe Animate</Link><br/>
            </Col>
            <Col lg={4}>
              <h1>Our other websites</h1>
              {/* <Link href="http://xdhero.com">Hero for Adobe XD</Link><br/> */}
              <Link href="http://richcontentdesign.com">Rich Content Design</Link><br/>
              <Link href="http://tourdeanimate.com">Tour de Animate</Link><br/>
              <Link href="http://tourdexd.com">Tour de XD</Link><br/>
            </Col>
          </Row>
        </Container>
      </Component>
    </Footer>
  )
}

////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  color: var(--gray-darkest);
  a, * {
    color: var(--gray-darkest);
  }
  h1 {
    font-size: 22px;
    color: white;
  }
`
