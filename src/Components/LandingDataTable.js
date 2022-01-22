import { useState, useEffect } from "react";
import MaterialDataTable from './DataTable/MaterialDataTable'
import './LandingDataTable.css'



const LandingDataTable = ( ) => {
    const [sentimentData, setSentimentData] = useState([])
    const [tableQuery, setTableQuery] = useState("")
    // const classes = styles();

    useEffect(() => {
        fetch("https://w15tufm3h1.execute-api.us-east-2.amazonaws.com/reference/ticker")
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setSentimentData(data);
        });
    }, []); // <-- Have to pass in [] here!

    function search(rows) {
      return rows.filter(row => row.ticker.toLowerCase().indexOf(tableQuery.toLowerCase()) > -1)
    }

    

    return (
      <div className="App-Main">
        <div>
          <input 
            type="text" 
            value={tableQuery} 
            onChange={(e) => setTableQuery(e.target.value)}
            className="dataFilter"
          />
        </div>
        <div className="LandingTable">
          <MaterialDataTable data={search(sentimentData)}/>
        </div>
        <div>
          {/* <LandingLineChart data={search(sentimentData)}/> */}
        </div>
      </div>
      );
};

export default LandingDataTable;