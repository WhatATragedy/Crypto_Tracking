import { useState, useEffect } from "react";
import MaterialDataTable from './DataTable/MaterialDataTable'
import './LandingDataTable.css'
import LandingLineChart from './Charts/LineChart'
import PropTypes from "prop-types";
import Box from '@mui/material/Box';
import { withStyles } from "@material-ui/core/styles";
import TextField from '@mui/material/TextField';



const LandingDataTable= (props) => {
    const [sentimentData, setSentimentData] = useState([])
    const [tableQuery, setTableQuery] = useState("")
    const { classes } = props;
    // const classes = styles();

    useEffect(() => {
        fetch("https://w15tufm3h1.execute-api.us-east-2.amazonaws.com/Beta/ticker")
        .then((response) => response.json())
        .then((data) => {
          setSentimentData(data);
        });
    }, []); // <-- Have to pass in [] here!

    function search(rows) {
      return rows.filter(row => row.ticker.toLowerCase().indexOf(tableQuery.toLowerCase()) > -1)
    }

    

    return (
      <div>
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
          <LandingLineChart data={search(sentimentData)}/>

        </div>
      </div>
      );
};

export default LandingDataTable;