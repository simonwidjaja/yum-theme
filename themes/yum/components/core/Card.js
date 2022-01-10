import React from "react";
import styled from "styled-components";

/**
 *
 * @param {string} icon path to icon to display
 * @param {string} title  card title
 * @param {string} text  text content
 * @param {string} bgColor  card background color
 * @param {boolean} isLight  (Optional) makes the color dark if the bg color is light to make the content readable
 */

export default function Card({
  icon,
  title,
  text,
  bgColor,
  isLight,
}) {
  return (
    <CardWrapper bgColor={bgColor} isDark={isLight} >
      {icon && <img src={icon} alt={title} />}
      <h3 className="font-h3">{title}</h3>
      <p>{text}</p>
    </CardWrapper>
  );
}

////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const CardWrapper = styled.div`
  background-color: ${(props) => props.bgColor || 'var(--purple)'};
  padding: 40px 28px 45px;
  border-radius: 32px;
  color: ${(props) => (props.isLight ? "#333" : "#FFF")};
  height: 100%;

  & img {
    height: 66px;
    margin-bottom: 20px;
  }
`;
