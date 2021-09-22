import './App.css';

import VendingMachine from './components/VendingMachine/VendingMachine';

function App() {
  return (
    <div className="App">
      <VendingMachine itemsAmount={3}/>
    </div>
  );
}

export default App;
