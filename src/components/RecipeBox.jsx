import { useState } from 'react';
import './../styles/RecipeBox.css'

const RecipeBox = ({ author, title, subtitle, text, showAuthor }) => {
    const [show, setShow] = useState(false);

    return (
        <div className='Outer-Box'>
            {showAuthor ? "" : <h3>{ author }</h3>} 
            <div className="Inner-Box">
                <p className="Title">{ title }</p>
                <p className="Subtitle"> { subtitle } </p>
                { show ? <p className="Text">{ text }</p> : "" }
                <button className='ShowButton' onClick={() => setShow(!show)}>
                    { show ? "Show Less" : "Read More" }
                </button>
            </div>
        </div>
    );
}

export default RecipeBox;