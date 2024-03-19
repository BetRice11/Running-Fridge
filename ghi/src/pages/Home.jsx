import React, { useState, useEffect } from "react"

const Home = () => {


    return (
        <nav>
            <div className="flex w-full">
                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                    Expires Soon
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                    Suggested Recipes
                </div>
                <div
                    id="content"
                    className="col-span-8 h-[calc(100vh-3.75rem)] p-4"
                >
                    <table className="absolute inset-x-0 bottom-0 h-16"></table>
                </div>
            </div>
        </nav>
    )
}
export default Home;
