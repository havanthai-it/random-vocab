import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { searchVocab, toggleLoading } from './SearchSlice';
import { COLOR_LIST } from '../../common/Constants';
import './Search.css';
import '../../common/common.css';



const Search = ({ mainColor, setMainColor }) => {
    const [loading, setLoading] = useState();
    const [searchValue, setSearchValue] = useState();
    const dispatch = useDispatch();
    const ref = useRef(null);

    // useEffect(() => {
    //     
    //  }, []);

    const extractTranslation = (response) => {
        if (Array.isArray(response)) {
            return response.length > 0 ? extractTranslation(response[0]) : '';
        } else {
            return response ? response : '';
        }
    }

    const search = async () => {
        dispatch(searchVocab({ word: searchValue, meaning: 'ngẫu nhiên' }));

        setMainColor(COLOR_LIST[Math.floor(Math.random() * COLOR_LIST.length)]);
    }

    const random = async () => {
        document.getElementById('outlined-basic').value = '';
        dispatch(toggleLoading(true));

        await fetch('https://api.api-ninjas.com/v1/randomword', {
                method: 'GET',
                headers: {
                    'X-Api-Key': 'SrmuuUrpglKyVl3HDaJzjQ==RhgVAh6TBeeESIji',
                },
            })
            .then((response) => response.json())
            .then((data) => {
                const randomWord = data.word;
                setSearchValue(randomWord);

                fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=${randomWord}`, {
                        method: 'GET'
                    })
                    .then((response) => {
                        response.text().then((text) => {
                            try {

                                // Dispatch
                                dispatch(searchVocab({ word: randomWord, meaning: extractTranslation(JSON.parse(text)) }));
                                dispatch(toggleLoading(false));
        
                                setMainColor(COLOR_LIST[Math.floor(Math.random() * COLOR_LIST.length)]);
                            } catch (e) {
                                console.log(e);
                            }
                        });
                    })
                    .catch((err) => console.log(err.message));
            })
            .catch((err) => console.log(err.message));
    }

    const ColorButton = styled(Button)({
        color: mainColor,
        borderColor: "#fff",
        '&:hover': {
            borderColor: "#fff",
        },
    });

    const ColorTextField = styled(TextField)({
        borderColor: "#fff",
        '&:hover': {
            borderColor: "#fff",
        },
    });

    return (
        <div>
            <Grid container direction="row" justifyContent="center" spacing={1}>
                <Grid item width={410}>
                    <ColorTextField fullWidth ref={ref} id="outlined-basic" label="" variant="outlined" value={searchValue} 
                    placeholder='Enter a word'
                    onChange={(event) => {setSearchValue(event.target.value)}}
                    className="Search-textfield"/>
                </Grid>
                <Grid item alignItems="stretch" style={{ display: "flex" }}>
                    <ColorButton variant="outlined" onClick={() => {search()}} style={{ backgroundColor: "#fff" }}>Search</ColorButton>
                </Grid>
                <Grid item alignItems="stretch" style={{ display: "flex" }}>
                    <ColorButton variant="outlined" onClick={() => {random()}} style={{ backgroundColor: "#fff" }}>Random</ColorButton>
                </Grid>
            </Grid>
        </div>
    );
}

export default Search;
