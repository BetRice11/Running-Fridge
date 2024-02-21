//@ts-check
/**
 * @typedef {{module: number, week: number, day: number, min: number, hour: number}} LaunchInfo
 *
 * @param {{info: LaunchInfo | undefined }} props
 * @returns {React.ReactNode}
 */
function Construct(props) {
    if (!props.info) {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Loading...</p>
                </header>
            </div>
        )
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Under construction</h1>
                <h2>Coming on (or before)</h2>
                <h2>
                    Module: {props.info.module} Week: {props.info.week} Day:{' '}
                    {props.info.day}
                </h2>
                <h2>
                    by or <strong>WELL BEFORE</strong> {props.info.hour}:
                    {props.info.min} Cohort Time
                </h2>
            </header>
        </div>
    )
}

export default Construct
