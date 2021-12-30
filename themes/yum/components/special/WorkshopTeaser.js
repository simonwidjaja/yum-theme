import styled from 'styled-components'
import Button from '../core/Button';
import Headline from '../core/Headline';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const id = 'WorkshopDetails';

export default function WorkshopDetails(props) {
  const className = props.className ? props.className : '';
  const style = props.style ? props.style : {};   
  const workshop = props.workshop;

  const Wish = () => <Tippy content="Keine Zeit aber interessiert? Klicke hier und wünsche dir einen zweiten Termin!"><span className="wish"><a href="/wish">😢</a></span></Tippy>;
  const HeadlineSub = () => workshop.date 
    ? <span>{workshop.date} <Wish /> &nbsp;|&nbsp; <nobr>{workshop.time}</nobr> &nbsp;|&nbsp; {workshop.price}</span>
    : <span>Demnächst</span>

  return (
    <Component className={[id, props.className].join(' ')} style={style}>
      <header>
        <Headline font="font-h3" 
          meta={workshop.title?.meta?.toUpperCase()}
          sub={<HeadlineSub></HeadlineSub>}>{workshop.title.title}</Headline>
      </header>
      <div className="teaser font-sm">
        {workshop.teaser.body}
      </div>
      {/* <div className="body">
        <ul>
          {workshop.agenda.map((agendaItem, agendaIndex) => (
            <li key={'agendaListItem'+agendaIndex}>{agendaItem}</li>
          ))}
        </ul>
      </div> */}
      <div className="facts">
        <div className="icon-label icon-time font-sm">
          {workshop.duration}
        </div>
        <div className="icon-label icon-cursor font-sm">
          {workshop.format}
        </div>
      </div>
      <Button href={'/workshops/lac/'+workshop.id} small shy backgroundColor='var(--gray)' color={'black'}>Details</Button>
    </Component>
  )
}

////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.article`
  padding: 30px;
  margin: var(--md) 0;
  background-color: white;
  transition: 300ms;
  box-shadow: rgba(0,0,0,.08) 0px 0px 5px;
  &:hover {
    box-shadow: rgba(0,0,0,.2) 2px 2px 20px;
  }
  header {
    .Headline {
      margin-bottom: 14px;
      .meta {
        font-size: 16px;
        color: var(--accent2);
      }
    }
  }
  .wish {
    filter: grayscale(1);
    cursor: pointer;
    opacity: 0.5;
    &:hover {
      opacity: 1;
      filter: grayscale(0);
    }
    a {
      text-decoration: none;
    }
  }
  .teaser {
    margin-bottom: 10px;
  }
  .body {
    margin-bottom: 20px;
  }
  .facts {
    display: flex;
    flex-wrap: wrap;
  }
  .icon-label {
    display: flex;
    align-items: center;
    padding-left: 26px;
    margin-right: 26px;
    background-size: 18px 18px;
    background-position: 0% 50%;
    background-repeat: no-repeat;
    color: #AAA;
    &.icon-time {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAjVBMVEUAAABwcHBwcHBxcXFwcHBxcXFwcHBxcXFwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHB4eHh5eXmBgYGCgoKKioqLi4uTk5OUlJScnJylpaWmpqa3t7fAwMDJycnS0tLT09Pb29vc3Nzk5OTt7e329vb////BM5CAAAAAGHRSTlMAMEBPUF9gb3B/gJCfoK+wv8DP0N/g7/CIxIwWAAABq0lEQVR42oWU55arMAyEgfQeIGXSe/E6q/d/vIscfI+NvPD9/o7OeCSIqrQG83kGZPP5oBXV0pmu4LCadv5UkwyCLAmq8RxB5rF022WA3fWlNJFWr+uuDCOG92C4anLQVxi6vjsGc/qU1ue/fgIzdt0+mKdV99iT5Vmd3UbBRlHJA8CLLGqDgsS68YpdTZY7gLuTnO2V7cR0pigoM8o0WO7CzRuSObcNknEPVCcTd5Kx20XBp17WtpEZ74LqZeLtzAqZq9BNsuZCvh3vqEmmnXnikFM0y5xjGKW8rmb5BSA1smqWlZEXXFyzrE3TKCCP32NAJvakbFy8gvKSYwj3QoEYuf9A6x5+KfhAU13YldWNvKVchesthde9p5JP0GX234teu4e0C7vmfevqierLVbrOiXZhR0vE8Uc5gHO9fOaW/Q9WIj9YrtpdjEDBlPwl5kK2f8bWW64i9n5fWxV2FbtI5I9RIH6MzATMWUTRZzATdqqzcfN0fYOcyyRrGPa3948uvJ/3bQ/DOokEcYogaRyFSHIIch4bpjtbw2E960a1tIdpmgN5mg7F0H9wfNyi5mjq/wAAAABJRU5ErkJggg==);
    }
    &.icon-cursor {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAARVBMVEUAAABwcHBwcHBwcHBwcHBxcXFwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHAzGNTiAAAAFnRSTlMAECAwQF9gcH+Aj5CfoLC/wNDf4O/wZJp1ggAAAKlJREFUeNqF0lUSxDAMA1AnZWbd/6bLWzLpt2/UjEeUrmsZyMwKYK2jRTZ80hqoAn4o0UjY8M+QKqYBPBRxzpxJpoOL9podlUGt2cOumTDCrzkywa6ZAjJKvJr9UErNjv5m0c2/J9dJ4tVsDZFRs/XFZSCL9Xmf1p6pSJxpofAWCiTuQjcib6G9SqL6FD6tRCdxf4pX01skcZ6yTysxSWo+Za9pyEnKf/MExSYmwmH+rDkAAAAASUVORK5CYII=);
    }
  }
  .tags {
    >div {
      color: var(--white);
      background-color: var(--gray-darker);
      display: inline-block;
      padding: 2px 18px;
      border-radius: 100px;
      margin: 0 6px 6px 0;
      font-size: 14px;
    }
  }
`