const About = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <h1 className="text-3x1">About</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name
                        <br />
                        <input type="text" placeholder="Name" />
                    </label>
                </div>
                <div>
                    <label>
                        Email
                        <br />
                        <input type="email" placeholder="Email" />
                    </label>
                </div>
                <button type="submit">Contact us</button>
            </form>
        </>
    )
}
export default About
