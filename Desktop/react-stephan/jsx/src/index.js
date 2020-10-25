import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import ApprovalCard from './approvalCard'

const App = () => {
    
    return (
        <div className="ui container comments">
        <ApprovalCard>
        <div>
        <h4>Warning</h4>
        Are you sure want to do this?
        </div>
        </ApprovalCard>

        <ApprovalCard>
        <CommentDetail name="Joe" time="545" message="go fuck yourself"/>
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail name="Ryan" time="745" message="hulu" />
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail name="Bryan" time="645" message="neighbor" />
        </ApprovalCard>
        </div>
    )

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)