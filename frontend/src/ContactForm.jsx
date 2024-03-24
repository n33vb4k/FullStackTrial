import { useState } from "react";

const ContactForm = ({}) => {
    //set up variables
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    //what happens when a form is submitted
    const onSubmit = async (e) => {
        e.preventDefault()
        const data = {
            firstName,
            lastName,
            email
        }
        const url = "http://127.0.0.1:5000/create_contact"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        if (response.status !== 201 && response.status !== 200) {
            const data = await response.json()
            alert(data.message)
        }
        else {
            //successfull
        }
    }

    return (
        <form>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input 
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input 
                    type="text"
                    id="firstName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
            </div>
            <button type = "submit">Create Contact</button>
        </form>
    );
};

export default ContactForm