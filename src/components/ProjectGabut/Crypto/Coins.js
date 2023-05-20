import React from 'react';
import CoinItem from './CoinItem';
import { Link } from 'react-router-dom';
import Coin from './Coin';
import { Container, Row, Col, Table } from 'react-bootstrap';

const Coins = (props) =>
{
     return (
          <Container fluid className='crypto'>
               <Container>
                    <div id='crypto'>
                         <Table responsive="sm">
                              <thead>
                                   <tr>
                                        <th>#</th>
                                        <th>Coin</th>
                                        <th>Price</th>
                                        <th>24h</th>
                                        <th>Market Cap</th>
                                   </tr>
                              </thead>
                              {props.coins.map(coins =>
                              {
                                   return (
                                        <CoinItem coins={coins} key={coins.id} />
                                   )
                              })}
                         </Table>
                    </div>
               </Container>
          </Container>
     )
}

export default Coins;