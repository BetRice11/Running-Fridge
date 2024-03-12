import React, { useState, useEffect } from "react"

const Home = () => {

    const [sliderWidth, setSliderWidth] = useState(0)
    const [showSlider, setShowSlider] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            const newSliderWidth =
                document.querySelector('.diff-item-2')?.clientWidth || 0
            setSliderWidth(newSliderWidth)
        }

        window.addEventListener('resize', handleResize)

        // Initial setup
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        // Toggle when the slider width reaches a certain threshold (e.g., 100)
        if (sliderWidth > 100) {
            setShowSlider(false)
        }
    }, [sliderWidth])


    return (
        <nav>
            <div className="flex w-full">
                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                    Expires Soon
                </div>
                <div className="divider divider-horizontal">
                </div>
                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                    Suggested Recipes
                </div>
                <div className="relative h-32 w-32">
                        <table className="absolute inset-x-0 bottom-0 h-16">
                            <thead>
                                <th>Food Item</th>
                            </thead>
                        </table>
                </div>
            </div>
        </nav>
    )
}
export default Home
