import React from 'react';

import axios from '../../axiosConfig';

import styles from './CoinSlot.module.scss';

function CoinSlot(props) {
  const addCoin = () => {
    axios.put(``, {
      coin: 1
    })
    .then(res => {
      const coins = Number(res.headers['x-coins']);
      props.setCoins(coins);
    }).catch(
      function (error) {
        console.log(error);
      }
    );
  };

  return (
    <div className={styles.coinSlot} onClick={props.addCoin}>
        <button onClick={addCoin}>ADD COIN</button>
    </div>
  );
}

export default CoinSlot;
