import Log from "../Log/Log";
import "./Topbar.css";

function topBar(){
    return(
        <div className = "topContainer">
            <div className = "header">
                <a href = "/">
                    Quizzly
                </a>
            </div>
            <Log className = "log"/>
        </div>
    )
}

export default topBar;