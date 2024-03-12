import { useState } from "react";
import { useSignupMutation } from "../app/apiSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignUp = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [signup, signupResponse] = useSignupMutation();

    useEffect(() => {
        if (signupResponse.isSuccess) navigate('/');
    }, [signupResponse]);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== passwordConfirmation) {
            setErrorMessage('Password and confirmation do not match.')
            return;
        };
        signup({username, password});
    }

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h1>Sign Up</h1>
                {errorMessage && <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="SignUp__username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Login__username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="SignUp__password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="Login__password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="SignUp__password_confirmation" className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="SignUp__password_confirmation"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
