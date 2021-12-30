import styled from 'styled-components'

export default function Spinner(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"Spinner "+className} style={style}>
      {!props.done && <div className="spinner"></div>}
      {props.done && 
        <svg className="done" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26">
          <circle cx="13" cy="13" r="13" fill="#00d6ad"/>
          <path d="M1536.2,1154.8l4.895,4.646,6.5-10.857" transform="translate(-1528.813 -1141.641)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </svg>
      }
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  display: inline-block;
  position: relative; 

  @keyframes spinner {
    to {transform: rotate(360deg);}
  }
  
  .spinner:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-top-color: #000;
    animation: spinner .6s linear infinite;
  }

  .done {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;    
  }
`
