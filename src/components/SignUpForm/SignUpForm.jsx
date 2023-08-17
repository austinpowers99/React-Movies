import {useState} from 'react';

export default function SignUpForm({ handleSignUp }) {
    const [formData, setFormData] = useState({
        name: ""
    });

    function handleSubmit(evt) {
        evt.preventDefault();
        handleSignUp(formData.name);
    }

    function handleChange(evt) {
        const newFormData = { ...formData, [evt.target.name]: evt.target.value };
        setFormData(newFormData);
    }

    return (
        <>
            <h3>Sign Up</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}></input>
                </div>
                <br></br>
                <button type="submit" className='btn btn-outline-success'>Log In</button>
            </form>
        </>
    )
}