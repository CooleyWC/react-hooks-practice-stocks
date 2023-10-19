import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portData, handleDelete}) {


  const portListings = portData.map((stock)=>{
    return <Stock 
    key={stock.id} 
    stockName={stock.name} 
    stockPrice={stock.price}
    stockTicker={stock.ticker}
    stockObj={stock}
    callBackFunction={handleDelete}
    />
  })
  
  return (
    <div>
      <h2>My Portfolio</h2>
      {portListings}
    </div>
  );
}

export default PortfolioContainer;
