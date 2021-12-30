import styled from 'styled-components'
import Headline from '../core/Headline'
import Separator from '../core/Separator'

export default function ColorfulHeadlineAndText(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"ColorfulHeadlineAndText "+className} style={style}>
      <Headline font={props.headlineFont || "font-xxxl"} meta={props.meta} title={props.title} sub={props.sub} className="margin-bottom-none"></Headline>
      {(props.body || props.children) &&
        <div>
          <Separator></Separator>
        </div>
      }
      {props.body || props.children}
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  .Headline h1 {
  
    position: relative;
    display: inline-block;
  
    color: var(--accent1);

    padding-bottom: 10px; // needed: letters that go below baseline might be capped (e.g. gjyq)

    @supports (background-clip: text) or (-webkit-background-clip: text) {
      background: linear-gradient(100deg, #f7345e 0%, #82009f 50%, #00E2B6 100%);
      background-clip: text;
      -webkit-background-clip: text;
      text-fill-color: transparent;    
      -webkit-text-fill-color: transparent;
    }
  }
`
