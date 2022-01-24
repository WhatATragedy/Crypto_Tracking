import { useState } from "react";
import { useQueries, useQuery } from "react-query";
import FundCards from "../Cards/FundCards";





export default function FundPage() {
    const [funds, setFunds] = useState([
        {
        "name": "Arweave",
        "funds": ['Coinbase', 'Binance'],
        "logo": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Bitcoin_logo.svg"
        }
    ]);
    const [dataFetched, setDataFetched] = useState(true)

    const { data: allFunds, isFetched } = useQuery("allFunds", () => fetch("https://xgmoe3viil.execute-api.us-east-2.amazonaws.com/reference/get-all")
    .then((response) => response.json()), { initialData: [] });

    function filterFundData( allFunds, filterCount ) {
        console.log(allFunds)
        return allFunds.filter(row => row.array_agg.length > filterCount)
    }
     
    if (isFetched) {
        return (
            <FundCards props={filterFundData(allFunds, 2)}/>
        )
    } else {
        return (
            <div>
                Data Not Fetched
            </div>
        );
    }
    
}