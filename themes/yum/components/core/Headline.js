import styled from 'styled-components'
import {MetaLabel} from '@@yum'

export default function Headline(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};    

  const font = props.font || 'font-h1';

  return (
    <Component className={"Headline "+className} style={style} inverted={props.inverted}>
      {/* {props.meta && <div className="meta">{props.meta}</div> } */}
      {props.meta && <MetaLabel>{props.meta}</MetaLabel> }
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
  h1 {
    color: ${props => props.color || props.inverted ? 'var(--white)' : 'var(--coal)'};
  }
`