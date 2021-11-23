import React from 'react';
import AddPost from "./AddPost";

const PostList = ({post,title}) => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>
                {title}
            </h1>
            {post.map((post, index) =>
                <AddPost number={index + 1} post={post}/>
            )}
        </div>
    );
};

export default PostList;