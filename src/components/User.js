import React from 'react' ;


function User(props) {
        return (
            <>
            <h1>My name is {props.name}.</h1>
            <p>I attended {props.uni} and possess a bachelor of Science and MBA certificate.
             I am a {props.profession} and have skills including {props.skills}.
            </p>
            </>
        )
    }
export default User;