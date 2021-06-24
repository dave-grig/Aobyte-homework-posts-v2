import React from 'react'

// material ui imports
import { Avatar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { Box, TextField } from '@material-ui/core'
import StarIcon from '@material-ui/icons/StarRate';
import {Button} from '@material-ui/core'
import {useState, useEffect} from 'react'
import './Comments.css'
import {Reply} from  './Reply'

export const Comment = ({img, name, text, rate, handleAddComment, replyData}) => {
    
    const [openReply, setOpenReply] = useState(false);
    const [reply, setReply] = useState({
        name: "",
        text: ""
    });

    const [authorName, setAuthorName] = useState("");
    const [commentText, setCommentText] = useState("");
    const [hideReply, setHideReply] = useState("d-none");
    const [rateColor, setRateColor] = useState("");
    const [isReplyAdded, setIsReplyAdded] = useState(false);

    useEffect(() => {
        console.log(rate,"lll")
        switch(true) {
            case rate < 3: {
                console.log("123")
                setRateColor('red');
                break;
            }

            case rate === 3 || rate === 4: {
                setRateColor('yellow');
                break;
            }

            case rate > 4: {
                setRateColor('green');
                break;
            }
        }
    },);

    const handleOpenReplyDialog = (e) => {
        setHideReply(hideReply === "" ? "d-none" : "");
    }

    const handleAuthorName = (e) => {
        setAuthorName(e.target.value);
    }

    const handleCommentText = (e) => {
        setCommentText(e.target.value);
    }

    const handleAddReply = (e) => {
        setReply({
            name: authorName,
            text: commentText
        });

        setIsReplyAdded(true);
    }


    
    return (
        <Paper className="comments__paper">
            <Box className="comments__wrapper">
                <Box className="comments__img-wrapper">
                    <Avatar className="comments__img" alt="comment author" src={img} />
                    <Typography className="comments__text" variant="h5">{name}</Typography>
                </Box>

                <Box className="comments__rate-wrapper">
                    <StarIcon />
                    <Typography className={rateColor}>{rate}</Typography>
                </Box>
            </Box>
            
            <Typography variant="body2">{text}</Typography>
            <Button onClick={handleOpenReplyDialog}>Reply</Button>
            <Box className={hideReply}>
                <TextField onChange={handleAuthorName}/>
                <TextField rows={3} onChange={handleCommentText} />                            
                <Button onClick={handleAddReply}>Add Comment</Button>
            </Box>
             {isReplyAdded ? <Reply img={null} text={commentText} name={authorName} /> : null} 
        </Paper>
    )
}
