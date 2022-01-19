import { useState, useEffect } from "react";
import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// https://www.youtube.com/watch?v=70wozHFsZFo Youtube video for creating your own data table with sorting etc.

export default function MaterialDataTable( { data }) {
    console.log(data)

    return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Ticker</TableCell>
              <TableCell align="right">Sentiment</TableCell>
              <TableCell align="right">Subjectivity</TableCell>
              <TableCell align="right">CMC Rank</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.ticker}
                </TableCell>
                <TableCell align="right">{row.polarity}</TableCell>
                <TableCell align="right">{row.subjectivity}</TableCell>
                <TableCell align="right">{row.cmc_rank}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

