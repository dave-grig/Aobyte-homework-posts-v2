import React from 'react'

// material ui imports
import { Avatar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { Box } from '@material-ui/core'
import StarIcon from '@material-ui/icons/StarRate';
import {useState, useEffect} from 'react'
import './Comments.css'

export const Reply = ({img, name, text}) => {
    return (
        <Paper className="comments__paper">
            <Box className="comments__wrapper">
                <Box className="comments__img-wrapper">
                    <Avatar className="comments__img" alt="comment author" src={img} />
                    <Typography className="comments__text" variant="h5">{name}</Typography>
                </Box>
            </Box>
            
            <Typography variant="body2">{text}</Typography>
        </Paper>
    )
}
