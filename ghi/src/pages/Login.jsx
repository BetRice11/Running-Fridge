import React, { useState, useEffect } from 'react'
import { useLoginMutation } from '../app/apiSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if (isSuccess) navigate('/')
        if (isError && error && error.data) {
            setErrorMessage(error.data.detail || 'An error occurred')
        }
    }, [isSuccess, isError, error, navigate])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMessage('') // Clear any existing error messages
        await login({ username, password })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-300">
            <div className="card w-full max-w-md shadow-2xl bg-white">
                <div className="card-body">
                    <h2 className="card-title text-center text-3xl font-bold text-blue-600">
                        Login
                    </h2>
                    <p className="text-center text-gray-500">
                        Welcome back to Running Fridge!
                    </p>
                    {errorMessage && (
                        <div className="alert alert-error shadow-lg my-5">
                            <div>{errorMessage}</div>
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label" htmlFor="username">
                                <span className="label-text">Username</span>
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="input input-bordered"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="password">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="input input-bordered"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className={`btn btn-primary ${
                                    isLoading ? 'loading' : ''
                                }`}
                                disabled={isLoading}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
