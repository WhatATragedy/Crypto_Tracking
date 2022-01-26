import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiFormLabel-root": {
            color: "grey" // or black
        },
        // "& .MuiTextField-root": {
        //     color: "white" // or black
        // },
        "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
        // Default transform is "translate(14px, 20px) scale(1)""
        // This lines up the label with the initial cursor position in the input
        // after changing its padding-left.
            transform: "translate(10px, 15px) scale(1);"
        },
    },
    inputRoot: {
      // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
      '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
        // Default left padding is 6px
        paddingLeft: 6
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#FA7268"
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#FA7268"
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#FA7268"
      }
    }
  }));

export default function ComboBox( { data, onChange } ) {

    const [tickers, setTickers] = useState([]);
    const classes = useStyles();

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
                classes={classes}
                renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label="Crypto"
                    // color='white'
                    fullWidth
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