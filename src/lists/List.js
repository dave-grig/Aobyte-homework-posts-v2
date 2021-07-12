import React from 'react'
import {useState} from 'react'
// material ui imports
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Paper from '@material-ui/core/Paper'
import {AddedPost} from '../posts/AddedPost'

export const List = ({listPosts, listId, handleClick, handleRemove}) => {
    return (
        <Paper>
            <Button >
                <AddIcon onClick={(e) => handleClick(e, listId)} />
            </Button>

            <Button>
                <RemoveIcon />
            </Button>
            
            {listPosts.map((post, index) => {
                if (post.listId === listId) {
                    return <AddedPost key={index} name={post.name} img={post.img} text={post.text} isAdded={true} handleRemove={handleRemove} currentPostIndex={index} listId={listId}/>
                } else {
                    return null;
                }
            })} 
        </Paper>
    )
}
