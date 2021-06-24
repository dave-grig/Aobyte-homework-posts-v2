import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './List.css'
import { Paper } from '@material-ui/core';
import {Post} from '../posts/Post'

export const List2 = ({listPosts, handleClick}) => {
    console.log(listPosts,"sssss")
    return (
        <Paper>
            <Button >
            <AddIcon onClick={(e) => handleClick(e, 'add', "2")} />
            </Button>

            <Button>
                <RemoveIcon />
            </Button>

            {listPosts.map((post, index) => {
                return <Post name={post.post.name} img={post.post.img} text={post.post.text} isAdded={true}/>
            })}
        </Paper>
    )
}
