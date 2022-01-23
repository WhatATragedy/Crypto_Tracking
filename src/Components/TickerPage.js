import { useState, useEffect } from "react";
import ComboBox from './Search/TickerSearch';
import TickerAvgDataTable from './DataTable/TickerAvgDataTable';
import './TickerPage.css';
import MaterialDataTable from './DataTable/MaterialDataTable';
import { useQueries, useQuery } from "react-query";
import { Chart } from 'react-charts';
import parseDate from 'postgres-date';

const fetchQuery = async ({ queryKey }) => {
    return fetch(`https://w15tufm3h1.execute-api.us-east-2.amazonaws.com/reference/ticker?ticker=${queryKey}`)
    .then((response) => response.json());
};

const primaryAxis = { getValue: datum => datum.date, scaleType: "localTime" };
const secondaryAxes = [{ getValue: datum => datum.polarity , scaleType: "linear", elementType: "line" }];

export default function TickerPage() {
    const [tickers, setTickers] = useState([]);

     const { data: allTickers } = useQuery("allTickers", () => fetch("https://w15tufm3h1.execute-api.us-east-2.amazonaws.com/reference/ticker/get-ticker-names")
    .then((response) => response.json()), { initialData: [] });

    const result = useQueries(tickers.map(ticker => ({
        queryKey: ticker, queryFn: fetchQuery
    })));

    const dataFetched = result.some(query => query.isFetched);

    const { data: averageData, isLoading } = useQuery("averageData", () => fetch("https://w15tufm3h1.execute-api.us-east-2.amazonaws.com/reference/averages")
    .then((response) => response.json()).then(data => {
        return data.map((item, index) => ({
            ...item,
            id: index
        }))
    }), { initialData: [] });

    function handleSearch(value) {
        setTickers(value);
    }

    function resultToChart(result) {
        return result.reduce((acc, tickerResult) => {
            const { data, isSuccess } = tickerResult;
            if(isSuccess){
            acc.push({ 
                label: data[0] ? data[0].ticker : 'UNKNOWN',
                data: data.map((item) => ({ date: new Date(parseDate(item.date)), polarity: item.polarity })).sort((a,b) => new Date(a.date) - new Date(b.date))
            });
        }
        return acc;
        }, [])
    }


    if (dataFetched) {
        return (
            <div className="tickerPage">
                <h1>Results for {tickers.join(', ')}</h1>
                <div  style={{ width: "80%", height: 300 }}  >
                <Chart style={{ position: 'relative' }} options={{ data: resultToChart(result), primaryAxis, secondaryAxes }} />
                </div>
                 <MaterialDataTable data={result.reduce((acc, {data}) => acc.concat(data || []), [])}/>
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