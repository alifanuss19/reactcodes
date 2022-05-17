import React from 'react';

const PostsInfo = ({ postsinfo }) => {

    return (
        <div>
            <div>{postsinfo.title}</div>
            <hr/><hr/>
            <div>
                <p>
                    {postsinfo.body}
                </p>
            </div>
            <hr/><hr/><hr/>
        </div>
    );
};

export default PostsInfo;
