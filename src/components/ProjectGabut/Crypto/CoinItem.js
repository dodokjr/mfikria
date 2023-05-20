import React from "react";
import { Alert, Table, Figure } from "react-bootstrap";

const CoinItem = (props) =>
{
     return (
          <tbody>
               <tr>
                    <td>{props.coins.market_cap_rank}</td>
                    <td><Figure>
                         <Figure.Image
                              width={60}
                              height={40}
                              alt="171x180"
                              src={props.coins.image}
                              className="img-symbol"
                         />
                         <Figure.Caption>
                         </Figure.Caption>
                    </Figure>
                         <p>{props.coins.symbol.toUpperCase()}</p></td>
                    <td>$ {props.coins.current_price.toLocaleString()}</td>
                    <td>{props.coins.price_change_percentage_24h < 0 ? (
                         <p className='alert alert-danger'>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
                    ) : (
                         <p className='alert alert-success'>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
                    )}</td>
                    <td>{props.coins.market_cap.toLocaleString()}</td>
               </tr>
          </tbody>
     )
}

export default CoinItem;