import styled from 'styled-components'
import * as yum from '@@yum'
import {useEffect, useState} from 'react'

export default function XrayLabel(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};

  const [xray, set_xray] = useState(true);

  useEffect(() => {
    set_xray( JSON.parse( window.localStorage.getItem('xray') ) );
  }, []);

  return !xray ? '' : (
    <Component className={"XrayLabel "+className} style={style}>
      <yum.Container className="base">
        {props.children}
      </yum.Container>
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  margin: 60px 0 20px 0;
  .base {
    background-color: #EEE;
    color: #AAA;
  }
`
