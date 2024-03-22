import React, { createContext, useContext, useEffect, useState } from 'react'
import { useGetTokenQuery } from '../services/accountApi'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const { data: token, isSuccess } = useGetTokenQuery()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        setIsAuthenticated(!!token && isSuccess)
    }, [token, isSuccess])

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
