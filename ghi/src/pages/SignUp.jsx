import { useState, useEffect } from 'react'
import { useCreateAccountMutation } from '../app/apiSlice'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const [signup, signupResponse] = useCreateAccountMutation()

    useEffect(() => {
        if (signupResponse.isSuccess) {
            navigate('/')
        }
        if (signupResponse.isError) {
            setErrorMessage(
                'An error occurred during sign up. Please try again.'
            )
        }
    }, [signupResponse, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== passwordConfirmation) {
            setErrorMessage('Password and confirmation do not match.')
            return
        }
        signup({ username, password })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-100">
            <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
                <h1 className="text-xl font-bold mb-4 text-center text-blue-700">
                    Sign Up
                </h1>
                {errorMessage && (
                    <div
                        className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg border border-red-200"
                        role="alert"
                    >
                        {errorMessage}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="SignUp__username"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            id="SignUp__username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="SignUp__password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            id="SignUp__password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="SignUp__password_confirmation"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            id="SignUp__password_confirmation"
                            value={passwordConfirmation}
                            onChange={(e) =>
                                setPasswordConfirmation(e.target.value)
                            }
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-3 py-2 bg-blue-500 text-white font-medium rounded-md text-sm shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
