import React, { useEffect, useState } from 'react';

import axios from '../../axiosConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import configData from '../../config.json';
import CoinSlot from '../CoinSlot/CoinSlot';
import MachineItem from '../../components/MachineItem/MachineItem';
import RecoverButton from '../RecoverButton/RecoverButton';
import RefillButton from '../RefillButton/RefillButton';

import styles from './VendingMachine.module.scss';
import SUCCESS_MESSAGES from '../../success_messages';


function VendingMachine(props) {
  const [coins, setCoins] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(``)
      .then(res => {
        const coins = Number(res.headers['x-coins']);
        setCoins(coins);
      }).catch(
        function (error) {
          console.log(`Error: ${error}`);
        }
      );

    axios.get(`inventory`)
      .then(res => {
        setItems(res.data);
      }).catch(
        function (error) {
          console.log(`Error: ${error}`);
        }
      );
  }, []);

  const setItemCount = (id, newCount) => {
    let index = items.findIndex(x => x.id === id);
    let newItems = [...items];
    newItems[index].count = newCount;
    setItems(newItems, items);
  };

  const refillItems = () => {
    axios.post(`inventory/refill/`)
      .then(res => {
        setItems(res.data);
        toast.success(SUCCESS_MESSAGES['successful_refill']);
      }).catch(
        function (error) {
          console.log(`Error: ${error}`);
        }
      );
  };

  const coinAmount = configData.DEFAULT_COIN_AMOUNT;

  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={styles.currentAmount}>You have {Number(coins)} coin(s) (${coinAmount*Number(coins)}).</div>
      <RefillButton refillItems={ refillItems }/>
      <div className={styles.vendingMachine}>
        <div className={styles.itemsDisplay}>
          {items ? items.map((elem, i) =>
            <MachineItem
              key={i}
              id={elem.id}
              name={elem.item.name}
              volume={elem.item.volume}
              price={elem.item.price}
              count={elem.count}
              setCoins={setCoins}
              setItemCount={setItemCount}
            />
          ): null}
        </div>
        <div className={styles.vendingControls}>
          <CoinSlot setCoins={setCoins}/>
          <RecoverButton coinsCount={coins} setCoins={setCoins}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default VendingMachine;
