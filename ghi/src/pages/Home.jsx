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
            <div className="flex items-center justify-center h-screen bg-base-200">
                {showSlider ? (
                    <div className="diff aspect-[16/9]">
                        <div className="diff-item-1"></div>
                        <div className="diff-item-2">
                            <img alt="daisy" src="RFD.jpg" />
                        </div>
                        <div className="diff-resizer"></div>
                    </div>
                ) : (
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Hello there</h1>
                            <p className="py-6">
                                Welcome to your Fridge lets get started!
                            </p>
                            <button className="btn btn-primary">
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
export default Home
