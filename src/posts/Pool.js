import React from 'react'
import {MainPost} from './MainPost'
import {postsData} from '../postsData'
import './Pool.css'
import { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'


export const Pool = () => {
    const [pageLimits, setPageLimits] = useState(['5', '10', '25', '50']);
    const [pagesCount, setPagesCount] = useState(0);
    const [currentPostsCountPerPage, setCurrentPostsCountPerPage] = useState(pageLimits[0]);
    const [currentPostsRangePerPage, setCurrentPostsRangePerPage] = useState({start: 0, end: pageLimits[0]})
    console.log(pagesCount,'hhhhyyyy')
    console.log(currentPostsCountPerPage,"kkkkkk")
    useEffect(() => {
        setPagesCount(Math.ceil(postsData.length / pageLimits[0]))
    }, [])

    const handlePostsPageClick = (e, pageId) => {
        setCurrentPostsRangePerPage({
            start: pageId * currentPostsCountPerPage - currentPostsCountPerPage,
            end: pageId * currentPostsCountPerPage 
        })
    }

    const handleSelectPostsCountPerPage = (e) => {
        console.log('rtrtrtrtr')
        setCurrentPostsCountPerPage((e.target.value));
        setCurrentPostsRangePerPage({
            start: 0,
            end: e.target.value 
        })
        setPagesCount(Math.ceil(postsData.length / e.target.value))

    }

    return (
        <>
            {postsData.slice(currentPostsRangePerPage.start, currentPostsRangePerPage.end).map((post, postIndex) => {
                return (
                    <MainPost img={post.img} name={post.name} text={post.text} />
                )
            })}

            <div className='posts-pagination'>
                {new Array(pagesCount).fill(0).map((page, pageIndex) => {
                    return (<div className='posts-page'>
                        <Button onClick={(e) => handlePostsPageClick(e, pageIndex + 1)}>
                            {pageIndex + 1}
                        </Button>
                    </div>
                    )
                })}
            </div>

            <select value={currentPostsCountPerPage} onChange={handleSelectPostsCountPerPage}>
                {pageLimits.map((limit, limitIndex) => {
                    return (
                    <option >
                        {limit}
                    </option>
                    )
                })}
            </select>
        </>
    )
}
