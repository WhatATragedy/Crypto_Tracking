import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function ComboBox( { data, onChange } ) {

    const [tickers, setTickers] = useState([]);

    return (
        <Box sx={{width: '50%', display: "flex", alignItems: "center" }}>
            <Autocomplete
                multiple
                fullWidth
                id="tags-outlined"
                options={data.sort((a,b) => a.localeCompare(b))}
                label="Crypto"
                onChange={(event, value) => setTickers(value)}
                value={tickers}
                renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label="Crypto"
                />
                )}
            />
            <IconButton 
                onClick={() => onChange(tickers)}
                size='large'
            > <SearchIcon /></IconButton>
        </Box>
    );
}