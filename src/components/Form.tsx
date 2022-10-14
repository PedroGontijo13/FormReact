import { useState } from "react";

interface personType {
    name: String;
    password: String;
}

interface ButtonProps {
    onSubmitForm: (name: string, password: string) => void;
}

export default function Form({onSubmitForm}: ButtonProps) {
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                alert("enviado")
                onSubmitForm(name, password)
            }} className="form-area">
                <div className="container name-area">
                    <input
                        type="text"
                        id="name"
                        autoComplete="off"
                        placeholder=""
                        className="form-input"
                        value={name}
                        onChange={e => {
                            setName(e.target.value)
                        }}
                    />
                    <img
                        src="./assets/Group 1.png"
                        style={{ float: 'left' }}
                        alt=""
                    />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="container">
                    <input
                        type="password"
                        id="password"
                        autoComplete="off"
                        placeholder=""
                        className="form-input input2"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}