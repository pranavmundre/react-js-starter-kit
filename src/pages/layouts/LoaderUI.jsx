import '../../styles/global.css'


function LoaderUI({loading}){
    if (!loading) return null;

    return (
        <>
        <div className="loader" style={{display: loading}}>
            <div className="loader-wrapper">
                <img src="/assets/icons/loader-1.gif" alt="Loader Icon" />
            </div>
        </div>
        </>
    )
}

export default LoaderUI;