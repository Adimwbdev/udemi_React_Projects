// import faker from 'faker';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {

return (
    <div className='ui container comments'>
        <CommentDetail author="Sam" time = "6:00" comment ="Suck" />
        <CommentDetail author="Alex" time = "7:00" comment="My" />
        <CommentDetail author="Jane" time = "8:00" comment="balls, Mr. Anderson!" />
    </div>




    );
};


ReactDOM.render(<App />, document.querySelector('#root'))
