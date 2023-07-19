import React from "react"
import "./partnerHomePage.css"

const partnerHomepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <h1>Hello Partner</h1>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default partnerHomepage