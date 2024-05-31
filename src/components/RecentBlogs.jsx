import React from 'react'
import Button from './Button'
import Card from './Card'
import './RecentBlogs.css'

function RecentBlogs() {
    return (
        <div className="recentBlogs">
            <div className='recentBlogsHeader'>
                <h2>Recent Blogs</h2>
                <Button type="add" children={'+ Add New'} className={'add'} />
            </div>
            <div className="blogList">
                <Card post={['14003', 'Post Title 1', '2024-05-20', '#DevOps, #IT, #Architecture']} />
                <Card post={['14003', 'Post Title 1', '2024-05-20', '#DevOps, #IT, #Architecture']} />
                <Card post={['14003', 'Post Title 1', '2024-05-20', '#DevOps, #IT, #Architecture']} />
                <Card post={['14003', 'Post Title 1', '2024-05-20', '#DevOps, #IT, #Architecture']} />
                <Card post={['14003', 'Post Title 1', '2024-05-20', '#DevOps, #IT, #Architecture']} />
                <Card post={['14003', 'Post Title 1', '2024-05-20', '#DevOps, #IT, #Architecture']} />
            </div>
        </div>
    )
}

export default RecentBlogs
