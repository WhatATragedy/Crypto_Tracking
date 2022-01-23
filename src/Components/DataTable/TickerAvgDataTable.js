import React from "react";
import { DataGrid } from '@mui/x-data-grid';

// https://www.youtube.com/watch?v=70wozHFsZFo Youtube video for creating your own data table with sorting etc.

// https://mui.com/components/data-grid/


export default function TickerAvgDataTable( { data }) {
    const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({
      subjectivity: false,
      id: false
    });
    
    const columns = [
        { field: 'id', headerName: 'ID', minWidth: 30, flex: 1, hide: true },
        { field: 'ticker', headerName: 'Crypto Coin', width: 200, flex: 1 },
        { field: 'avg', headerName: 'Average Sentiment', width: 70, flex: 1 },
    ];

    return (
    <div style={{ height: 700, padding: '4%', display: 'flex', textAlign: 'center', width: '80%'}}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={50}
          rowsPerPageOptions={[50]}
          checkboxSelection
          sx={{
            boxShadow: 2,
            background: 'white',
            border: 2,
            m: 2,
            borderColor: 'white',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={(newModel) =>
            setColumnVisibilityModel(newModel)
          }
        />
    </div>
    )
}

