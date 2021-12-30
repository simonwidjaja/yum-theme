import styled from 'styled-components'

export default function NAME(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"NAME "+className} style={style} size="1" props={props}></Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.hr`
  display: inline-block;
  width: ${attr => attr.props.width || 'var(--xl)'};
  height: ${attr => attr.props.height || 'var(--xxs)'};
  margin: 30px inherit;
  border: none;
  opacity: 1;
  background-color: ${attr => attr.props.color || 'var(--accent1)'};
`
