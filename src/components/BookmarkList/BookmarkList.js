import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './BookmarkList.css';

const BookmarkList = (props) => {
    const bookmarks = useSelector((state) => state.bookmarkList.bookmarks);

    return (
        <div>
            { (!bookmarks || bookmarks.length === 0) ? '' :
                <div className='BookmarkList'>
                    <h2 style={{marginLeft: '14px'}}>Bookmarks</h2>
                    <List>
                        { bookmarks.map(item => <ListItem key={item.word} className='BookmarkList-listItem'>
                            <ListItemText primary={item.word} secondary={item.meaning} />
                        </ListItem>) }
                    </List>
                </div>
            }
        </div>
    );
}

export default BookmarkList;
