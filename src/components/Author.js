import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronCircleUp, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Author = (props) => {
    const user = props.location.state.user;
    const [visible, setVisible] = useState((new Array(user.posts.length)).fill(false));
    console.log(user)

    const toggleComments = (i) => {
        let temp = visible.slice();
        temp[i] = !temp[i];
        setVisible(temp)
    }

    return (<>
        <h3>{user.name}'s Blog Posts</h3>
        {user.posts.map((post, i) => {
            return <div key={post.id}>
                <p>{post.title}</p>
                <div className='App-div' style={{marginBottom: '1vmin'}}>
                    <p className='Post-full'>{post.body}</p>
                </div>
                <div className='Post-comments' onClick={() => toggleComments(i)}>
                    <div style={{cursor: 'pointer'}}>
                        Show comments
                        <FontAwesomeIcon icon={visible[i] ? faChevronUp : faChevronDown} style={{paddingLeft: '1vmin'}} />
                    </div>
                    {!visible[i] ? <></> : post.comments.map(comment => {
                        return <div key={comment.id} style={{paddingLeft: '3vmin', textIndent: '-3vmin'}}>
                            <p><b>{comment.name}:</b> {comment.body}</p>
                        </div>
                    })}
                </div>
            </div>
        })}
    </>)
}

export default Author;