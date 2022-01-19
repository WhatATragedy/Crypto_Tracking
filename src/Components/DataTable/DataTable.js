import { useState, useEffect } from "react";
import React from "react";

// https://www.youtube.com/watch?v=70wozHFsZFo Youtube video for creating your own data table with sorting etc.

export default function DataTable( { data }) {

    const columns = data[0] && Object.keys(data[0])
    console.log(data)
    return (
        <table cellPadding={0} cellSpacing={0}>
            <thead>
                <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
            </thead>
            <tbody>
                {
                    data.map(row => <tr>
                        {
                            columns.map(column => <td>{row[column]}</td>)
                        }
                    </tr>)
                }
            </tbody>
        </table>
    )
}