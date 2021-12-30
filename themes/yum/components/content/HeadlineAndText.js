import styled from 'styled-components'
import Headline from '../core/Headline'
import Separator from '../core/Separator'

export default function HeadlineAndText(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"HeadlineAndText "+className} style={style}>
      <Headline font={props.headlineFont || "font2-h3"} meta={props.meta} title={props.title} className="margin-bottom-none"></Headline>
      <div>
        <Separator></Separator>
      </div>
      {props.body || props.children}
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  margin-bottom: 40px;
`
