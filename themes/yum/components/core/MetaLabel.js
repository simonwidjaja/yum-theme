import styled from 'styled-components'

export default function MetaLabel (props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"MetaLabel   "+className} style={style}>
      {props.children}
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  display: inline-block;
  padding: 3px 16px;
  margin: 8px 4px 8px 0;
  background-color: var(--purple);
  color: white;
  font-size: 16px;
  letter-spacing: 3px;
  font-weight: bold;
  text-transform: uppercase;
  // Force line breaks
  &::before {
    content: '\\A';
  }
  &::after {
    content: '\\A';
  }
`
