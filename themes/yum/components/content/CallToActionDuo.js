import React from "react";
import styled from "styled-components";
import {DefaultTheme, Container, Row, Col, Button} from "@@yum";

/**
 * CallToActionDuo
 * @param {Array} items Items with following properties:
 *                      title, text, buttonLabel, baseColor, inverted 
 */
export default function CallToActionDuo({ items }) {
  // console.log('items', items.length, items.map);
  return (
    <Component>
      <Container>
        <Row>
          {/* {items.map((item, index) => {
            return <h1>TEST</h1>
          })} */}
          {items.map((item, index) => {
            const { title, text, buttonLabel, href, baseColor, inverted } = item;
              return (
                <Col
                  key={index}
                  md={{ offset: 0, span: 6 }}
                  style={{ display: "flex" }}
                >
                  <div className={`item ${inverted ? 'inverted' : ''}` } style={{backgroundColor: baseColor, borderColor: !inverted ? "var(--coal)" : baseColor}}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <Button href={href} inverted={inverted}>{buttonLabel}</Button>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </Component>
  );
};

const Component = styled.div`
  .item {
    width: 100%;
    border: 2px solid;
    border-radius: 32px;
    padding: 59px 56px;
  
    h3 {
      font-weight: 600;
      margin-bottom: 12px;
    }
  
    p {
      margin-bottom: 46px;
      font-size: 16px;
    }
  
    ${DefaultTheme.mq.max("md")} {
      margin-bottom: 14px;
      height: auto;
      padding: 30px 20px;
    }
  }
`;
