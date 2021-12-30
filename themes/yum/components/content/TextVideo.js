import styled from 'styled-components'

export default function TextVideo(props) {
  let className = props.className ? props.className : '';
  className += (props.reversed) ? ' reversed' : '';
  let style = props.style ? props.style : {};

  return (
    <Component className={"TextVideo "+className} style={style} props={props}>

      <div className="wrapper">
        {/* <!-- Text Col --> */}
        <div className="text-col">
          <div className="meta">{props.meta}</div>
          <h1 className="title">{props.title}</h1>
          <h2 className="subtitle">{props.sub}</h2>
          <div className="body">
            {props.body}
          </div>
        </div>
        {/* <!-- Video Col --> */}
        <div className="video-col">
          <div className="video">
            <video src={props.video} autoPlay={true} muted={true} loop={true} playsInline={true}></video>
          </div>
        </div>
      </div>

    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  text-align: left;
  
  .wrapper {
    display: flex;

    flex-direction: column;

    .text-col {
      flex: 1 1 45%;
      background-color: ${props => props.props.backgroundColor};
      color: ${props => props.props.inverted ? 'white' : 'var(--coal)'};
      padding: 34px;
      display: flex;
      // align-items: center;
      justify-content: center;
      flex-direction: column;
      .meta {
        font-size: 15px;
        text-transform: uppercase;
        color: var(--accent2);
        letter-spacing: 2px;
      }
      .title {
        font-size: 42px;
        line-height: 36px;
        font-weight: 900;
        text-transform: uppercase;
      }
      .subtitle {
        font-size: 16px;
      }
      .body {
        margin-top: 20px;
        font-size: 16px;
        line-height: 22px;
        ul {
          padding-left: 18px;
          li {
            margin-bottom: 10px;
            line-height: 20px;
          }
        }
      }

    }
    .video-col {
      flex: 1 1 55%;
      position: relative;
      /* background-color: var(--coal); */
      display: flex;
      justify-content: center;
      align-items: center;
      .video {
        flex: 1 1 100px;
        position: relative;
        // padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
        padding-top: 75%; /* 4:3 Aspect Ratio */
        /* background-color: var(--coal); */
        max-width: 520px;
        video {
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.9;
          /* max-height: 300px; */
        }
      }
    }
  }
  
  // Swap columns
  &.reversed {
    .wrapper {
      flex-direction: column;
    }
  }    
  

  ${props => props.theme?.mq?.min('lg')} {
    .wrapper {
      flex-direction: row;
    }
    &.reversed {
      .wrapper {
        flex-direction: row-reverse;
      }
    }         
  }  
`
