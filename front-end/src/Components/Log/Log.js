import { useAuth0 } from "@auth0/auth0-react";
import "./Log.css";
import {Button} from 'react-bootstrap';

function Log(){
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
    console.log(isAuthenticated);
    if(!isAuthenticated)
    {
        return(<Button size = "lg" variant = "secondary" className = "log" onClick = {() => {
            loginWithRedirect();
        }}> 
                    Login
                </Button>            
        );
    }
    else if(isLoading){
        return(<div>
            Loading
        </div>
            );
    }
    else{
        return(<div className = "log">
            {user.name}
            <img src = {user.picture} alt = "User" className = "mr-4 ml-4 userIcon" />
            <Button size = "lg" variant = "secondary" onClick = {() => {
                logout({ returnTo: window.location.origin });
            }}>
                Logout
            </Button>
        </div>
        );
    }
}

export default Log;