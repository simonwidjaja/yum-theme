import styled from 'styled-components'
import { useEffect } from 'react';

/*
Non Rect Script Example
<script charset="utf-8" type="text/javascript" src="//js-eu1.hsforms.net/forms/shell.js"></script>
<script>
  hbspt.forms.create({
	region: "eu1",
	portalId: "25408596",
	formId: "c72ae9a0-25c5-4f62-be94-d62633802d3e"
});
</script>
*/

/**
 * Hubspot Form
 * @param {string} region Region code (e.g. "eu1")
 * @param {string} portalId Portal Id (e.g. "12308596")
 * @param {string} formId Form Id (e.g. "99999999-1234-1234-1234-d62633802d3e")
 * @returns 
 */
export default function HubspotForm({region, portalId, formId}) {
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src='//js-eu1.hsforms.net/forms/shell.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region,
          portalId,
          formId,
          target: '#'+formId
        })
      }
    });

  }, []);
  return (
    <Component className="HubspotForm">
      <div id={formId}></div>
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  background-color: white;
`