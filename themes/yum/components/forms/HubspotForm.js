import styled from 'styled-components'
import { useEffect } from 'react';
import { Headline } from '@@yum';

/*
Non React Script Example provided by HubSpot Form builder
<script charset="utf-8" type="text/javascript" src="//js-eu1.hsforms.net/forms/shell.js"></script>
<script>
  hbspt.forms.create({
	region: "eu1",
	portalId: "12308596",
	formId: "99999999-25c5-4f62-be94-d62633802d3e"
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
export default function HubspotForm({title, sub, region, portalId, formId, consent}) {
  
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
          target: '#id-'+formId
        })
      }
    });

  }, []);
  return (
    <Component className="HubspotForm">
      {title && <Headline sub={sub}>{title}</Headline>}
      <div className="margin-bottom-lg"></div>
      <div id={`id-${formId}`}></div>
      {consent && 
        <div className="consent font-xs">
          <div className="icon"></div>
          <div>
            <p>
              <strong>
                {consent == 'de' 
                  ? 'Wir verpflichten uns, Deine Privatsphäre zu schützen und zu respektieren.' 
                  : 'We are committed to protecting and respecting your privacy'
                }
              </strong>
            </p>
            <p>
              {consent == 'de' 
                ? `Wir verwenden Deine persönlichen Daten nur zur Verwaltung Deines Kontos und zur Bereitstellung der von Dir angeforderten Produkte und Dienstleistungen. Von Zeit zu Zeit möchten wir Dich über unsere Produkte und Dienstleistungen sowie andere Inhalte, die für Dich von Interesse sein könnten, informieren. Wenn Du damit einverstanden bist, dass wir Dich zu diesem Zweck kontaktieren, gib dies bitte an.
                  Du kannst diese Benachrichtigungen jederzeit abbestellen. Weitere Informationen zum Abbestellen, zu unseren Datenschutzverfahren und dazu, wie wir Deine Privatsphäre schützen und respektieren, findest Du in unserer Datenschutzerklärung.`
                : `We’ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please let us know by tickingthe checkbox.
                  You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.`
              }
            </p>
          </div>
        </div>
      }
      <div className="margin-bottom-xl"></div>
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  background-color: white;
  .consent {
    margin-top: 30px;
    display: flex;
    background-color: #f5f5f9;
    color: var(--coal-lighter);
    padding: 30px 20px 20px;
    border-radius: 12px;
    .icon {
      margin-top: -10px;
      margin-bottom: 10px;
      min-width: 50px;
      min-height: 50px;
      margin-right: 20px;
      background-image: url('data:image/png;base64,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');
      background-repeat: no-repeat;
      background-size: contain;
      opacity: 0.5;
    }
  }
`