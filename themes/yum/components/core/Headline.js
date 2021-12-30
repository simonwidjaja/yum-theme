import styled from 'styled-components'

export default function Headline(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};    

  const font = props.font || 'font-h1';

  return (
    <Component className={"Headline "+className} style={style}>
      {props.meta && <div className="meta font2-h4">{props.meta}</div> }
      <h1 className={`${font} margin-top-none margin-bottom-none`}>{props.title || props.children}</h1>
      {props.sub && <div className="sub font2-p">{props.sub}</div> }
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  margin-bottom: var(--xs);  
`