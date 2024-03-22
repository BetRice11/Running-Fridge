import React from 'react'
import { useLogoutMutation } from '../app/apiSlice'

const LogoutButton = () => {
    const [logout, { isLoading, isSuccess, isError }] = useLogoutMutation()

    const handleLogout = async () => {
        try {
            await logout().unwrap()
            // Perform any additional actions on logout success,
            // e.g., redirecting to the homepage or showing a success message
            console.log('Logged out successfully')
        } catch (error) {
            console.error('Logout failed', error)
            // Handle logout error, e.g., displaying an error message
        }
    }

    return (
        <button
            onClick={handleLogout}
            disabled={isLoading}
            className="btn btn-danger" // Use your styling or Tailwind classes
        >
            Logout
        </button>
    )
}

export default LogoutButton
