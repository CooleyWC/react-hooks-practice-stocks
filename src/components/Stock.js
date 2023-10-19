import React from "react";

function Stock({stockName, stockPrice, stockTicker, stockObj, callBackFunction}) {
  return (
    <div>
      <div className="card" onClick={()=>callBackFunction(stockObj)}>
        <div className="card-body">
          <h5 className="card-title">{stockName}</h5>
          <p className="card-text">{stockTicker}: {stockPrice}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
