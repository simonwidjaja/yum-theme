import React from "react";
import styled from "styled-components";

const List = ({ items, iconColor, iconBaseColor } ) => {
  return (
    <Component iconColor={iconColor} iconBaseColor={iconBaseColor}>
      {items.map((item, index) => {
        return (
          <li key={index}>

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
              <g transform="translate(-58 -5143.277)">
                <circle cx="15" cy="15" r="15" transform="translate(58 5143.277)" />
                <path d="M17423.332-2337.728a1.439,1.439,0,0,1-1.02-.422l-4.787-4.788a1.439,1.439,0,0,1,0-2.039,1.439,1.439,0,0,1,2.037,0l3.572,3.572,5.217-7.457a1.441,1.441,0,0,1,2.008-.355,1.447,1.447,0,0,1,.355,2.008l-6.2,8.866a1.442,1.442,0,0,1-1.053.61C17423.416-2337.729,17423.375-2337.728,17423.332-2337.728Z" transform="translate(-17350.898 7501.74)"/>
              </g>
            </svg>

            <p>{item}</p>
          </li>
        );
      })}
    </Component>
  );
};

export default List;

const Component = styled.ul`
  padding: 0;

  li {
    display: flex;
    margin-bottom: 18px;
  
    &:last-child {
      margin-bottom: 0;
    }

    svg {
      flex: 0 0 40px;
      margin-right: 10px;
      
      circle {
        fill: ${props => props.iconBaseColor || 'var(--snow)'};
      }
      path {
        fill: ${props => props.iconColor || 'var(--purple)'};
      }
    }

    img {
      width: 30px;
      height: 30px;
      margin-right: 18px;
    }
  
    p {
      color: var(--coal);
      font-size: 18px;
      line-height: 26px;
      margin-bottom: 0;
    }
  }
`;
