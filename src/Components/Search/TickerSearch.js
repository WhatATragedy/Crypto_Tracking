import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function ComboBox( { data, onChange } ) {

    return (
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={data}
        onChange={(event, value) => onChange(value)} // prints the selected value
        sx={{ width: 300, backgroundColor: '#ECEFF4' }}
        renderInput={(params) => <TextField {...params} label="Crypto Symbol" />}
        />
    );
}