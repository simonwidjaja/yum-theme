import styled from 'styled-components'

export default function PriceCard(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"PriceCard "+className} style={style}>
        <div className="price-head">
          <div className="title">{props.title}</div>
          <div className="sub">{props.sub}</div>
        </div>

        <div>
          <ul>
            {
              props.list.map((item, index) => <li key={'PriceCard_list_key_'+index}>{item}</li>)
            }
          </ul>
        </div>

        <div className="old-price">{props.oldPrice}</div>
        <div className="price">{props.price}</div>
        <div className="sub-price">{props.subPrice}</div>

        {/* payhip */}
        <a href={'https://payhip.com/b/'+props.payhipId} className="payhip-buy-button" data-product={props.payhipId}>Buy Now</a>
        <script type="text/javascript" src="https://payhip.com/payhip.js"></script>

        <div className="small-print">Prices are US$. Additional taxes may apply (see final price on next page).</div>
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  display: inline-block; 
  text-align: center;
  width: 80%; 
  max-width: 500px;
  /* border: 1px solid #DDD; */
  border-radius: 12px;
  /* padding-bottom: 60px; */
  background: #FFF;
  margin: 0 20px 20px 20px;
  transition: 300ms;
  box-shadow: rgba(0,0,0,.2) 0px 0px 30px;
  &:hover {
    box-shadow: rgba(0,0,0,.3) 2px 2px 50px;
  }

  @media (max-width: 992px) {
    width: 100%;
    max-width: auto;
  }      

  .price-head {
    min-height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 22px 30px;
    color: white;
    background: var(--accent1);
    border-radius: 12px 12px 0 0;
    .title {
      font-size: 32px;
      font-weight: 700;
      margin: 10px 0;
    }
    .sub {
      font-size: 16px;
      /* opacity: 0.6; */
    }
  }

  ul {
    text-align: left;
    font-size: 15px;
    color: var(--gray-darkest);
    padding: 40px 40px;
    @media (max-width: 992px) {
      padding: 20px 30px;
    }            
    /* li:before { content: '✔'; margin-left: -20px; margin-right: 10px; }  */
    li {
      padding: 0;
      list-style-type: none; 
      text-align: center;
    }
  }

  .price {
    font-size: 62px;
    font-weight: 700;
    margin: 10px 0 10px 0;
  }
  .sub-price {
    font-size: 16px;
    margin: 20px 0 40px 0;
    padding: 0 20px;
  }

  .payhip-buy-button {
    font-size: 20px !important;
    padding: 12px 36px !important;
    background-image: none !important;
    background-color: #85019d !important;
    border-radius: 222px !important;
    border: none !important;
    &:hover {
      background-color: #000 !important;
    }
  }

  .small-print {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0 20px;
    font-size: 14px;
    line-height: 18px;
    color: var(--gray-dark);
  }
`
