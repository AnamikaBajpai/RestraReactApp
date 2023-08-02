
import React, {useState, useEffect} from 'react';
import Table from './Components/TableData/Table';
 import Button from './UI/Button';


  const App = () => {
    const [table1Orders, setTable1Orders] = useState([]);
    const [table2Orders, setTable2Orders] = useState([]);
    const [table3Orders, setTable3Orders]  = useState([]);
    const [orderId, setOrderId] = useState("");
    const [price, setPrice] = useState("");
    const [orderItem, setOrderItem] = useState("");
    const [selectedTable, setSelectedTable] = useState("");

    useEffect (() => {
      const table1Data = JSON.parse(localStorage.getItem('table1'));
      const table2Data = JSON.parse(localStorage.getItem('table2'));
      const table3Data = JSON.parse(localStorage.getItem('table3'));

      setTable1Orders(table1Data);
      setTable2Orders(table2Data);
      setTable3Orders(table3Data);

    }, []);

    useEffect (() => {
      localStorage.setItem('table1', JSON.stringify(table1Orders));
      localStorage.setItem('table2', JSON.stringify(table2Orders));
      localStorage.setItem('table3', JSON.stringify(table3Orders));
    }, [table1Orders, table2Orders, table3Orders]);

    const handleAddToBill = () => {
      const newOrder = {
        orderId,
        tableNo:selectedTable,
        price,
        orderItem,
      };
   
   if (selectedTable === 1) {
    
    setTable1Orders((prevOrders) => [...prevOrders, newOrder]);
  } else if (selectedTable === 2) {
    
    setTable2Orders((prevOrders) => [...prevOrders, newOrder]);
  } else if (selectedTable === 3) {
    
    setTable3Orders((prevOrders) => [...prevOrders, newOrder]);
  }
    
    setPrice('');
    setOrderItem('');
       
  };

  const deleteHandler = (orderId, tableNo) => {
    if(tableNo === 1) {
      setTable1Orders(table1Orders.filter((order) => order.orderId!== orderId));
    } else if(tableNo === 2) {
      setTable2Orders(table2Orders.filter((order) => order.orderId!== orderId));
    } else if(tableNo === 3) {
      setTable3Orders(table3Orders.filter((order) => order.orderId!== orderId));
    }
  };

 return (
  <div>
    <div>
      <h2>Add Order</h2>
      <div>
        <label>
        <label>
          Unique Order Id:
          <input type="number" 
          value={orderId} 
          onChange={(e) => setOrderId(e.target.value)} />
        </label> 
        < br/>
          Table No:
          <select value={selectedTable} 
          onChange={(e) => setSelectedTable(Number(e.target.value))}>
            <option value></option>
            <option value={1}>Table 1</option>
            <option value={2}>Table 2</option>
            <option value={3}>Table 3</option>
          </select>
        </label>
        <br />
        <label>
          Price:
          <input type="text" 
          value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <label>
          Order Item:
          <input type="text" 
          value={orderItem} 
          onChange={(e) => setOrderItem(e.target.value)} />
        </label>
        <br />
        <Button onClick={handleAddToBill} label="Add to Bill" />
      </div>
    </div>
    <div>
      <h2>Orders</h2>
      <Table tableNo={1} 
      orders={table1Orders} 
      onDelete={deleteHandler} />
      <Table tableNo={2} 
      orders={table2Orders} 
      onDelete={deleteHandler} />
      <Table tableNo={3} 
      orders={table3Orders} 
      onDelete={deleteHandler} />
    </div>
  </div>
);
};


export default App;


    
