import Sidebar from "../Sidebar/Sidebar";
import QA from '../QA/QA';
import "./Main.css";

function Main(){
    return(
        <div className = "main">
            <Sidebar/>
            <QA/>
        </div>);
}

export default Main;