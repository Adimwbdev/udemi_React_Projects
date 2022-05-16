import faker from 'faker';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import './App.css'


const App = () => {

return (
    <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail author="Sam" time = "6:00" comment ="Suck" img = {faker.image.image()} />
            </ApprovalCard>
            <ApprovalCard>
        <CommentDetail author="Alex" time = "7:00" comment="My" img = {faker.image.image()} />
            </ApprovalCard>
            <ApprovalCard>
        <CommentDetail author="Jane" time = "8:00" comment="balls, Mr. Anderson!" img = {faker.image.image()} />
        </ApprovalCard>
       
    </div>




    );
};


ReactDOM.render(<App />, document.querySelector('#root'))
