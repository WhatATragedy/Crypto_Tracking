import { useState, useEffect } from "react";
import ComboBox from './Search/TickerSearch';
import TickerAvgDataTable from './DataTable/TickerAvgDataTable';
import './TickerPage.css';
import MaterialDataTable from './DataTable/MaterialDataTable';


export default function TickerPage() {
    const [allTickers, setAllTickers] = useState([])
    const [averageData, setAverageData] = useState([])
    const [hasSearched, setHasSearched] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [searchData, setSearchData] = useState("")

    function handleSearch(value) {
        setHasSearched(true)
        setSearchValue(value)
        console.log(value)
        fetch("https://w15tufm3h1.execute-api.us-east-2.amazonaws.com/reference/ticker?ticker=".concat(value))
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setSearchData(data);
        });
    }
    
    useEffect(() => {
        fetch("https://w15tufm3h1.execute-api.us-east-2.amazonaws.com/reference/ticker/get-ticker-names")
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setAllTickers(data);
        });
    }, []); // <-- Have to pass in [] here!

    useEffect(() => {
        fetch("https://w15tufm3h1.execute-api.us-east-2.amazonaws.com/reference/averages")
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          // Add unique ID to the items so datagrid stops moaning
          data.forEach((item, i) => {
            item.id = i + 1;
          });
          setAverageData(data);
        });
    }, []);

    if (hasSearched) {
        return (
            <div className="tickerPage">
                <h1>Results for {searchValue}</h1>
                <MaterialDataTable data={searchData}/>
            </div>
        )
    } else {
        return (
            <div className="tickerPage">
                <ComboBox data={allTickers} onChange={handleSearch}/>
                <TickerAvgDataTable data={averageData}/>
    
            </div>
        );
    }
    
}