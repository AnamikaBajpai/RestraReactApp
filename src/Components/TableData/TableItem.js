import React from 'react';


const TableItem = ({ order, onDelete }) => {

    const {orderId, tableNo, price, orderItem } = order;

    const deleteHandler= () => {
        onDelete(orderId, tableNo);
    }

    return (

        <div> 
            <p> Order Id: {orderId}</p>
            <p>Price: {price} </p>
            <p>Table No:{tableNo} </p>
            <p>Order: {orderItem} </p>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );

};



export default TableItem;