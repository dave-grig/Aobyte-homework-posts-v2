import React from 'react'
import {useState, useEffect} from 'react'

import './Post.css'

import Button from '@material-ui/core/Button'
// material ui imports
import { Avatar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { Comment } from '../comments/Comment'
import { commentsData } from '../comments/commentsData'
import { Grid } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/Remove';

export const AddedPost = ({img, name, text, handleRemove, currentPostIndex, listId}) => {
    

    return (
        <>
            <Paper className="post__paper">
                <Box className="post__img-wrapper">
                    <Avatar className="post__img" alt="comment author" src={img} />
                    <Typography className="post__text" variant="h6">{name}</Typography>
                    <Button>
                        <RemoveIcon onClick={(e) => handleRemove(e, currentPostIndex, listId, true)} />
                    </Button>
                </Box>
                <Typography variant="body1">{text}</Typography>
            </Paper>

            <Typography variant="body1">
                Comments
            </Typography>
        </>
    )
}