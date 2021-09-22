import React from 'react';

import styles from './BuyButton.module.scss';

function BuyButton(props) {
  return (
    <div className={styles.buyButton}>
        <button onClick={ props.buyItem } disabled={props.disabled}>BUY</button>
    </div>
  );
}

export default BuyButton;
