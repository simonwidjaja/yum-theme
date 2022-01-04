import styled from 'styled-components'

export default function Separator(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  let color = props.color || 'var(--purple)';
  return (
    <Component className={"Separator "+className} style={style} size="1" props={props}>
      <hr />
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  hr {
    display: inline-block;
    width: ${attr => attr.props.width || 'var(--lg)'};
    height: ${attr => attr.props.height || 'var(--xs)'};
    margin: 10px 0 !important;
    border: none;
    opacity: 1;
    background-color: ${attr => attr.props.color || 'var(--purple)'};
  }
`
