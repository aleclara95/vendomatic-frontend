import React, { useEffect } from 'react';

import styles from './RefillButton.module.scss';

function RefillButton(props) {
  return (
    <div className={styles.refillButton}>
      <button onClick={ props.refillItems } disabled={props.disabled}>REFILL ITEMS</button>
    </div>
  );
}

export default RefillButton;
