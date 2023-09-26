// React functions take props as arguments
import React, {useState} from 'react';
import Class from '../class/class'; 
import "./home.css"
import ClassGraphQL from '../class/classGraphQL';

function Home(props){
    {/*keep track of the value of the text input favorite class*/}
    {/* creates a state variable. the value will be stored in 'value' and*/}
    const [value, setValue] = useState('');
    {/*use State takes an argument that determines the type that the data will be stored in*/}
    const [favoriteClasses, setClasses] = useState([]);
    
    {/*to handle a change on a text. It takes an event as an argument*/}
    const handleChange = (event) => {
        {/*stores the text input from that is put into the input box*/}
        const newValue = event.target.value.replace(/\s/g, '').toUpperCase();
        setValue(newValue);
    }

    const handleSubmit = (event) => {
        {/*the deafult of submitting a form is making a post request and change the page. We do not want that so this disables it*/}
        event.preventDefault();
        {/*use if statement to make sure duplicate classes are not being added to the list*/}
        if (!favoriteClasses.includes(value)) {
            {/*add the new favorite class to the array of favorite classes*/}
            setClasses(favoriteClasses.concat(value));
            {/*reset the value in the input to blank*/}
            setValue('');
        }
        {/*print out favorite classes*/}
        console.log(favoriteClasses);
    }


    return(
        <div>
            <h1>Make a list of your favorite classes!</h1>
            {/*onSubmit connects the form submission to the handleSubmit function*/}
            <form onSubmit = {handleSubmit}>
                <label>Add Favorite Class</label>
                {/*this takes input as text only. onChange attatches this input to the handle change event. value connects the keyword value to the text input*/}
                <input type='text' value={value} onChange={handleChange}></input>
                <button type='submit'>Add Class </button>
            </form>
            {/*display a list of favorite classes on the webpage*/}
            <div className="my-classes">
                {/*use curly brackets when adding javascript*/}
                {favoriteClasses.map((favClass) =>
                    // <p key={favClass}>{favClass}</p> */
                    <Class name={favClass} key={favClass}></Class>
                )}
            </div>
            <div className="my-classes">
                {/*use curly brackets when adding javascript*/}
                {favoriteClasses.map((favClass) =>
                    // <p key={favClass}>{favClass}</p> */
                    <ClassGraphQL name={favClass} key={favClass}></ClassGraphQL>
                )}
            </div>
        </div>
    )
}

//have to export javascript function
export default Home;