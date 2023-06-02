import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { searchVocab } from './SearchSlice';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    const search = () => {
        dispatch(searchVocab(searchValue));
    }

    const random = () => {
        setSearchValue('Random Word');
        dispatch(searchVocab('Random Word'));
    }

    return (
        <Grid container direction="row" justifyContent="center">
            <Grid item>
                <TextField id="outlined-basic" label="" variant="outlined" value={searchValue} onChange={(event) => {setSearchValue(event.target.value)}}/>
            </Grid>
            <Grid item alignItems="stretch" style={{ display: "flex" }}>
                <Button variant="outlined" onClick={() => {search()}}>Search</Button>
            </Grid>
            <Grid item alignItems="stretch" style={{ display: "flex" }}>
                <Button variant="outlined" onClick={() => {random()}}>Random</Button>
            </Grid>
        </Grid>
    );
}

export default Search;
