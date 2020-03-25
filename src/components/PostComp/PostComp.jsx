import React from 'react';

const PostComp = (props) => {
    return (
        <div>
            <div className="post">
                <div className="img-thumb">
                    <img src="http://placeimg.com/640/480/any" alt="" />
                </div>
                <div className="content">
                    <p className="title">{props.data.title}</p>
                    <p className="desc">{props.data.body}</p>
                    <button className="update" onClick={()=> props.update(props.data)}>Update</button>
                    <button className="remove" onClick={()=> props.remove(props.data.id)}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default PostComp;