import styled from 'styled-components'

export default function NAME(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"NAME "+className} style={style}></Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  
  // ${props => props.theme?.mixin?.font('primary')} 
  // ${props => props.theme?.mixin?.fontSize('h1')}
  
  // ${props => props.theme?.mq?.min('sm')} {
  //  border-right: 10px solid blue;
  //}
`
