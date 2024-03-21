import React from 'react'
import { UserCircle, Settings, PlusCircle } from 'lucide-react'

const Profile = () => {
    const [activeTab, setActiveTab] = React.useState('recipes')

    return (
        <div className="min-h-screen bg-blue-400 p-4">
            <div className="max-w-4xl mx-auto bg-white shadow rounded-lg overflow-hidden">
                <div className="p-4 lg:p-8">
                    <div className="flex items-center space-x-4 lg:space-x-8">
                        <UserCircle className="w-16 h-16 lg:w-24 lg:h-24 text-blue-400" />
                        <div>
                            <h2 className="text-xl lg:text-2xl font-bold">
                                Jane Doe
                            </h2>
                            <p className="text-blue-600">Culinary Enthusiast</p>
                        </div>
                    </div>
                    <div className="mt-4 lg:mt-8">
                        <ul className="flex space-x-2 lg:space-x-4">
                            <li>
                                <button
                                    className={`py-2 px-4 rounded ${
                                        activeTab === 'recipes'
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-blue-100'
                                    }`}
                                    onClick={() => setActiveTab('recipes')}
                                >
                                    My Recipes
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`py-2 px-4 rounded ${
                                        activeTab === 'inventory'
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-blue-100'
                                    }`}
                                    onClick={() => setActiveTab('inventory')}
                                >
                                    Fridge Inventory
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`py-2 px-4 rounded ${
                                        activeTab === 'settings'
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-blue-100'
                                    }`}
                                    onClick={() => setActiveTab('settings')}
                                >
                                    <Settings className="inline-block w-5 h-5" />
                                </button>
                            </li>
                        </ul>
                    </div>
                    {/* Content based on active tab */}
                    <div className="mt-4 lg:mt-8">
                        {activeTab === 'recipes' && (
                            <div>
                                <p className="text-lg font-semibold mb-4">
                                    My Favorite Recipes
                                </p>
                            </div>
                        )}
                        {activeTab === 'inventory' && (
                            <div>
                                <p className="text-lg font-semibold mb-4">
                                    Fridge Inventory
                                </p>
                                <button className="btn btn-primary mt-4">
                                    <PlusCircle className="inline-block w-5 h-5 mr-2" />{' '}
                                    Add Ingredient
                                </button>
                            </div>
                        )}
                        {activeTab === 'settings' && (
                            <div>
                                <p className="text-lg font-semibold mb-4">
                                    Settings
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
