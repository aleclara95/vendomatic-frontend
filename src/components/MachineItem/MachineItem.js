import React from 'react';

import axios from '../../axiosConfig';
import { toast } from 'react-toastify';

import BuyButton from '../BuyButton/BuyButton';
import ERROR_MESSAGES from '../../error_messages';
import SUCCESS_MESSAGES from '../../success_messages';

import styles from './MachineItem.module.scss';


function MachineItem(props) {
  const buyItem = () => {
    axios.put(`inventory/${props.id}/`)
      .then(res => {
        const coins = Number(res.headers['x-coins']);
        props.setCoins(0);
        const newItemCount = Number(res.headers['x-inventory-remaining']);
        props.setItemCount(props.id, newItemCount);
        toast.success(SUCCESS_MESSAGES['successful_buy'](props.name, coins));
      }).catch(
        function (error) {
          if (error.response) {
            if (error.response.status === 400) {
              toast.error(ERROR_MESSAGES['insufficient_funds']);
              props.setCoins(0);
            }
          }
        }
      );
  };

  return (
    <div className={styles.machineItem}>
        <p><b>{ props.name }</b></p>
        <p>{ props.volume } lts</p>
        <p>${ props.price }</p>
        <p>There { props.count !== 1 ? "are" : "is"} { props.count ? props.count : "no" } item{ props.count !== 1 ? "s" : ""} left.</p>
        <BuyButton disabled={props.count <= 0} buyItem={ buyItem } />
    </div>
  );
}

export default MachineItem;
