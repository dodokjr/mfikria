import React from 'react';
import CoinItem from './CoinItem';
import { Link } from 'react-router-dom';
import Coin from './Coin';
import { Container, Row, Col } from 'react-bootstrap';

const Coins = (props) =>
{
     return (
          <Container fluid className='crypto'>
               <Container>
                    {props.coins.map(coins =>
                    {
                         return (
                              <CoinItem coins={coins} key={coins.id} />
                         )
                    })}
               </Container>
          </Container>
     )
}

export default Coins;