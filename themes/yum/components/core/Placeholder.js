import styled from 'styled-components'

export default function Placeholder(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"Placeholder "+className} style={style}>
      <div className="type">{props.type ? props.type.toUpperCase() : 'PLACEHOLDER'}</div>
      {props.children}
    </Component>
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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 1px 0;
  padding: 40px;
  background-color: var(--gray);

  .type {
    display: inline;
    width: fit-content;
    border: 1px solid var(--gray-darker);
    color: var(--gray-darker);
    padding: 6px 14px;
    margin-bottom: 20px;
  }
`
