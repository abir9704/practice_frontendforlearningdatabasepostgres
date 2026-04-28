import React from 'react';
import OrderHistory from './OrderHistory';

const Historypage = () => {
    return (
        <div>

            <p className="text-3xl text-center mt-10 mb-2 font-bold">Order History</p>

            <OrderHistory></OrderHistory>
            
        </div>
    );
};

export default Historypage;