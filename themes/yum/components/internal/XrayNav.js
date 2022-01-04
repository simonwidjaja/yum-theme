import styled from 'styled-components'
import * as yum from '@@yum'
import {useEffect, useState} from 'react'

export default function XrayNav(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};

  const [xray, set_xray] = useState(true);

  useEffect(() => {
    set_xray( JSON.parse( window.localStorage.getItem('xray') ) );
  }, []);

  function toggle() {
    const newXray = !JSON.parse(xray);
    set_xray( newXray )
    window.localStorage.setItem('xray', newXray)
    location.reload()
  }

  return (
    <Component className={"XrayNav "+className} style={style}>
      <yum.Container className="base">
        <button onClick={toggle}>toggle xray</button>
      </yum.Container>
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  .base {
    background-color: #EEE;
    color: #AAA;
  }
`
