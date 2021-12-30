// Requires react-player

import styled from 'styled-components'
// See https://www.npmjs.com/package/react-player#config-prop
//import ReactPlayer from 'react-player'
//import ReactPlayer from 'react-player/youtube'
import ReactPlayer from 'react-player/lazy'

export default function Video(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"Video "+className} style={style}>

      {/* <ReactPlayer url='https://www.youtube.com/watch?v=omWU5kWQUr0'
                   controls /> */}
      {/* <ReactPlayer url='https://vimeo.com/582445579'
                   controls /> */}

      <ReactPlayer url={props.url}
                   width="100%"
                   controls={props.controls == 'undefined' ? true : false} />
      
      {props.title &&
        <div className="title font2-sm">{props.title}</div>
      }

    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  .title {
    margin-top: 10px;
    text-align: center;
    opacity: 0.4;
    font-style: italic;
  }  
`
