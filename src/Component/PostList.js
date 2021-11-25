import React from 'react';
import AddPost from "./AddPost";

const PostList = ({post,title,remove}) => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>
                {title}
            </h1>
            {post.map((post, index) =>
                <AddPost remove={remove} number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;