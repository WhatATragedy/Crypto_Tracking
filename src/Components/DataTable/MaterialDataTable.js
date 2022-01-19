import { useState, useEffect } from "react";
import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// https://www.youtube.com/watch?v=70wozHFsZFo Youtube video for creating your own data table with sorting etc.

// https://mui.com/components/data-grid/


export default function MaterialDataTable( { data }) {
    console.log(data)
    const columns = [
        { field: 'id', headerName: 'ID', minWidth: 30, flex: 1 },
        { field: 'cmc_rank', headerName: 'CMC Rank', width: 70, flex: 1 },
        { field: 'ticker', headerName: 'Crypto Coin', width: 200, flex: 1 },
        { field: 'polarity', headerName: 'Polarity', type: 'number', width: 200, flex: 1 },
        { field: 'subjectivity', headerName: 'Subjectivity', type: 'number', width: 200, flex: 1 },
        { field: 'date', headerName: 'Date', width: 200, flex: 1 }
    ];

    return (
    <div style={{ height: 700, padding: '4%', display: 'flex', textAlign: 'center' }}>
        <DataGrid
        rows={data}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[25]}
        checkboxSelection
        sx={{
            boxShadow: 2,
            background: '#ECEFF4',
            border: 2,
            m: 2,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
        />
    </div>
    )
}

