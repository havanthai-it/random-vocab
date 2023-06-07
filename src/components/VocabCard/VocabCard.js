import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';
import './VocabCard.css';
import { addBookmark, removeBookmark } from '../BookmarkList/BookmarkListSlice';


const VocabCard = ({ mainColor }) => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const toggleBookmarked = () => {
        if (!isBookmarked(state.search.word)) {
            // Add
            dispatch(addBookmark({ word: state.search.word, meaning: state.search.meaning }));
        } else {
            // Remove
            dispatch(removeBookmark({ word: state.search.word, meaning: state.search.meaning }));
        }
    }

    const ColorBookmarkIcon = styled(BookmarkIcon)({
        color: mainColor
    });

    const ColorBookmarkBorderIcon = styled(BookmarkBorderIcon)({
        color: mainColor
    });

    const isBookmarked = (word) => {
        return state.bookmarkList.bookmarks.find(i => i.word === word);
    }

    return (
        <div className="VocabCard-card">
            { !state.search.word ? '' : 
            <Card variant="outlined">
                { state.search.loading 
                ? <CardContent>
                    <Skeleton variant="text" height={40} />
                    <Skeleton variant="text" height={56} />
                </CardContent>
                : <CardContent>
                    { isBookmarked(state.search.word) 
                        ? <span className="VocabCard-bookmark" onClick={toggleBookmarked}><ColorBookmarkIcon /></span>
                        : <span className="VocabCard-bookmark" onClick={toggleBookmarked}><ColorBookmarkBorderIcon /></span> }
                    <div>Meaning of <span className="VocabCard-word">{state.search.word}</span></div>
                    <div><span className="VocabCard-meaning">{state.search.meaning}</span></div>
                </CardContent>
                }
            </Card> }
        </div>
    );
}

export default VocabCard;
