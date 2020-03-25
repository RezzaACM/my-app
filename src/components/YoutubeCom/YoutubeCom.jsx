import React from 'react';
import './YoutubeCom.css'

const YoutubeCom = (props) => {


    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    );
};

YoutubeCom.defaultProps = {
    time: '00.00',
    title: 'Title Here',
    desc: 'Desc here'
}

export default YoutubeCom;