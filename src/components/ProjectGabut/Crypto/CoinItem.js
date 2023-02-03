import React from "react";
import { Alert, Row, Col, Figure } from "react-bootstrap";

const CoinItem = (props) =>
{
     return (
          <Row>
               <Col>
                    <Alert variant='light' className="coin-row">
                         <p>{props.coins.market_cap_rank}</p>
                         <Figure>
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
                         <p>{props.coins.symbol.toUpperCase()}</p>
                         <p>$ {props.coins.current_price.toLocaleString()}</p>
                         {props.coins.price_change_percentage_24h < 0 ? (
                              <p className='alert alert-danger'>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
                         ) : (
                              <p className='alert alert-success'>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
                         )}
                         <p className='hide-mobile'>{props.coins.total_volume.toLocaleString()}</p>
                         <p className='hide-mobile'>{props.coins.market_cap.toLocaleString()}</p>
                    </Alert>
               </Col>
          </Row>
     )
}

export default CoinItem;