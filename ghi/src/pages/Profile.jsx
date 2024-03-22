import React from 'react'
import { UserCircle, Settings, PlusCircle } from 'lucide-react'
import { useLogoutMutation } from '../app/apiSlice'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()
    const [logoutAccount, { isSuccess }] = useLogoutMutation()
    const [activeTab, setActiveTab] = React.useState('recipes')

    const logoutClick = async () => {
        await logoutAccount()
    }

    // Navigate to onboard or any other route after successful logout
    React.useEffect(() => {
        if (isSuccess) {
            navigate('/login')
        }
    }, [isSuccess, navigate])

    return (
        <div className="min-h-screen bg-blue-400 p-4">
            <div className="max-w-4xl mx-auto bg-white shadow rounded-lg overflow-hidden">
                <div className="p-4 lg:p-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 lg:space-x-8">
                            <UserCircle className="w-16 h-16 lg:w-24 lg:h-24 text-blue-400" />
                            <div>
                                <h2 className="text-xl lg:text-2xl font-bold">
                                    Jane Doe
                                </h2>
                                <p className="text-blue-600">
                                    Culinary Enthusiast
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={logoutClick}
                            className="btn btn-outline-danger" 
                        >
                            Log Out
                        </button>
                    </div>
                    <div className="mt-4 lg:mt-8">
                        <ul className="flex space-x-2 lg:space-x-4">
                            {/* Tabs content here */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
