import React, {useState} from 'react';
import './customisation.css';



const Customisation = ({isOpen}) =>{

    const [inputs, setInputs] = useState({
        options: "1",
        directions: ""
    });

    const handleInput = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
    
        });
    }

    if(!isOpen)
        return null;
    return(
        <div className = 'custom-overlay'>
            <div className='choices'>
                <select className='options' name='options'>
                    <option value="Small">1</option>
                    <option value="Regular">2</option>
                </select>
                <textarea className="directions" rows="6" name="directions" placeholder="Add extra directions" value={inputs.directions} onChange={handleInput}></textarea>
            </div>
            <button className="reviewbtn">Submit</button>
        </div>
    );
}

export default Customisation;