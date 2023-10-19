import React from "react";
import Stock from "./Stock";
import { useState } from "react";

function StockContainer({stockData, handlePurchase, filteredData}) {
 

  const stockListings = stockData.map((stock)=>{
    return <Stock 
    key={stock.id} 
    stockName={stock.name} 
    stockPrice={stock.price}
    stockTicker={stock.ticker}
    callBackFunction={handlePurchase}
    stockObj={stock}
    />
  })



  return (
    <div>
      <h2>Stocks</h2>
      {stockListings}
    </div>
  );
}

export default StockContainer;
