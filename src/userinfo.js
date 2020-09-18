import React from 'react';

function UserInfo(props) {
    return (
        <div>
            <h1>I'm enrolled in {props.userName} I'm enrolled in {props.curriculumName} and this is my {props.assignmentNo}</h1>
        </div>
    );
}

export default UserInfo;