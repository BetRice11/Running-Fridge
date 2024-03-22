import React from 'react'
import { useLogoutMutation } from '../app/apiSlice'

const LogoutButton = () => {
    const [logout, { isLoading, isSuccess, isError }] = useLogoutMutation()

    const handleLogout = async () => {
        try {
            await logout().unwrap()
            console.log('Logged out successfully')
        } catch (error) {
            console.error('Logout failed', error)
        }
    }

    return (
        <button
            onClick={handleLogout}
            disabled={isLoading}
        >
            Logout
        </button>
    )
}

export default LogoutButton
