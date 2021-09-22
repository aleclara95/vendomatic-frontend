import React, { useState } from 'react';

import axios from 'axios';
import { toast } from 'react-toastify';

import configData from '../../config.json';
import ERROR_MESSAGES from '../../error_messages';
import SUCCESS_MESSAGES from '../../success_messages';

import styles from './RecoverButton.module.scss';

function RecoverButton(props) {
  const [dispensedCoins, setDispensedCoins] = useState(0);

  const dispenseCoins = () => {
    if (props.coinsCount) {
      axios.delete(`http://localhost:8000/api/v1/`)
      .then(res => {
        const newDispensedCoins = Number(res.headers['x-coins']);
        setDispensedCoins(newDispensedCoins);
        const coinAmount = configData.DEFAULT_COIN_AMOUNT;
        toast.success(SUCCESS_MESSAGES['successful_dispense'](newDispensedCoins, newDispensedCoins * coinAmount));
        props.setCoins(0);
      }).catch(
        function (error) {
          console.log(error);
        }
      );
    }
    else {
      toast.error(ERROR_MESSAGES['no_coins_to_dispense']);
    }
  }

  return (
    <React.Fragment>
    <div className={styles.recoverButton}>
        <button onClick={dispenseCoins}>DISPENSE COINS</button>
    </div>
    </React.Fragment>
  );
}

export default RecoverButton;
