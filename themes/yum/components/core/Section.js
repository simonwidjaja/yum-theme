import styled from 'styled-components'

export default function Section(props) {
  const className = props.className ? props.className : '';
  const style = props.style ? props.style : {};  
  return (
    <Component className={['Section', className].join(' ')} style={style}>
      {props.children}
    </Component>
  );
}

////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.section`
  //
`