import { useState } from 'react'
import { useLoginMutation } from '../app/apiSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Login = () => {
    const navigate = useNavigate()
    const [login, loginResponse] = useLoginMutation()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if (loginResponse.isSuccess) navigate('/')
        if (loginResponse.isError) {
            setErrorMessage(loginResponse.error.data.detail)
        }
    }, [loginResponse])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('login')
        console.log({ username, password })
        e.preventDefault()
        login({ username, password })
    }

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h1>Login</h1>
                {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="Login__username" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="Login__username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Login__password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="Login__password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
