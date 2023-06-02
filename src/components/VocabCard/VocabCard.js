import { useState } from 'react';
import { useSelector } from 'react-redux'
import Card from '@mui/material/Card';


const VocabCard = (props) => {
    const state = useSelector((state) => state);

    return (
        <Card variant="outlined">
            <div>State: {JSON.stringify(state)}</div>
            <div>Searched value: {state.search.searchValue}</div>
        </Card>
    );
}

export default VocabCard;
