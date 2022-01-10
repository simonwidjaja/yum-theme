import React, { useRef, useLayoutEffect, createRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

/**
 *
 * @param {Array} cards  Array of cards objects
 */

export default function CardSet({ cards }) {
  const wrapperRef = useRef();
  const [eltPerLine, setEltPerLine] = useState(0);
  const minWidth = 260;
  const [cardWidth, setCardWidth] = useState(minWidth);

  useLayoutEffect(() => {
    let timer = null;
    const updateCardWidth = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        const width = wrapperRef.current.offsetWidth;
        const epl = Math.floor((width + 24) / (minWidth + 24));
        if (epl >= cards.length) {
          setCardWidth((width + 24) / cards.length - 24);
        } else {
          setCardWidth((width + 24) / epl - 24);
        }
        setEltPerLine(epl);
      }, 50);
    };
    window.addEventListener("resize", updateCardWidth);
    updateCardWidth();
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  return (
    <CardSetWrapper
      totalCards={cards.length}
      cardWidth={cardWidth}
      ref={wrapperRef}
    >
      {cards.map((item, index) => (
        <div key={index} className={`card-container ${(index + 1) % eltPerLine ? '' : 'last-of-line'}`}>
          <Card {...item} />
        </div>
      ))}
    </CardSetWrapper>
  );
}

////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const CardSetWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  & .card-container {
    width: ${(props) => props.cardWidth}px;
    margin-right: 24px;
    min-width: 260px;
    margin-bottom: 30px;

    &:last-child {
      margin-right: 0;
    }

    &.last-of-line {
        margin-right: 0;
    }
  }

  @media (max-width: 767px) {
    display: block;

    & .card-container {
      width: 100%;
    }
  }
`;
