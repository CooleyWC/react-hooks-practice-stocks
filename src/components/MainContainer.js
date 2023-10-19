import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockData, setStockData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [portData, setPortData] = useState([]);
  const [filteredData, setFilteredData] = useState('All');

  const [sortBy, setSortBy] = useState('')

  useEffect(()=>{
    fetch('http://localhost:3001/stocks')
    .then(res=>res.json())
    .then(data=>{
     
      setStockData(data)
      setIsLoaded(!isLoaded)
    })
  }, [])


if(!isLoaded){return <h1>Loading....</h1>}


function handlePurchase(purchStock){
  setPortData([...portData, purchStock])
}

function handleDelete(deleteStock){
  const filteredPortData = portData.filter((stock)=>{
    return stock.id !== deleteStock.id
  })
  setPortData(filteredPortData)
}


  const sortByAlphaPrice = stockData.slice().sort((a, b)=>{

    if(sortBy==="Alphabetically"){
      return a.name.localeCompare(b.name)
    } else {
      return a.price-b.price
    }

  })




  // console.log(selection)
  const selectedFilter = sortByAlphaPrice.filter((stock)=>{
    if(filteredData==='All') return true
    return stock.type.toLowerCase() === filteredData.toLowerCase()
  })


  return (
    <div>
      <SearchBar 
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        sortBy={sortBy}
        setSortBy={setSortBy}
        />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stockData={selectedFilter} 
            setStockData={setStockData}
            handlePurchase={handlePurchase}
            filteredData={filteredData}


            />
        </div>
        <div className="col-4">
          <PortfolioContainer portData={portData} handleDelete={handleDelete}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
