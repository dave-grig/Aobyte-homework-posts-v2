import React from 'react'
import {Post1} from './Post1'
import {postsData} from '../postsData'

export const Pool = () => {
    return (
        <div>
            {postsData.map((user, index) => {
                return (
                    < Post1 key={index}  name={user.name} img={user.img} text={user.text} />
                )
            })}
        </div>
    )
}
