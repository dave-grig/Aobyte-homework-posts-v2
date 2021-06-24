import React from 'react'
import {useState} from 'react'
// material ui imports
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Paper from '@material-ui/core/Paper'
import {Post2} from '../posts/Post2'

export const List = ({listPosts, listId, handleClick, handleRemove}) => {
    return (
        <Paper>
            <Button >
                <AddIcon onClick={(e) => handleClick(e, listId)} />
            </Button>

            <Button>
                <RemoveIcon />
            </Button>
            // there is reason to not use Array.filter
            {listPosts.map((post, index) => {
                if (post.listId === listId) {
                    return <Post2 key={index} name={post.name} img={post.img} text={post.text} isAdded={true} handleRemove={handleRemove} currentPostIndex={index} listId={listId}/>
                } else {
                    return null;
                }
            })} 
        </Paper>
    )
}
