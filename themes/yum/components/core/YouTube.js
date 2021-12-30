import { Container } from '../../index';
import styled from 'styled-components'

export default function YouTube(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"YouTube "+className} style={style}>
      <Container>
        <div className="frameWrapper">
          <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/"+props.id} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <figcaption>{props.title}</figcaption>
      </Container>
    </Component>
  )
}

////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.figure`
  .frameWrapper {
    position: relative;
    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */

    iframe {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 6px;
    }
  }

  figcaption {
    margin-top: 20px;
    text-align: center;
    @include font2;
    // color: rgba($color-white, 0.5);
    opacity: 0.5;
  }
`
