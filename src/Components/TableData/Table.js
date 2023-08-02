import React from 'react';
import TableItem from './TableItem';

const Table = ({ tableNo, orders, onDelete }) => {
    return (
        <div>
          
            <h2>table {tableNo}</h2>
            {orders.map((order) => (
                <TableItem 
                key={order.orderId}
                order={order}
                onDelete={onDelete} />

            ))}
        </div>
    );
};

export default Table;


