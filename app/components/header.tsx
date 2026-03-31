import Login from "./login";
import Logout from "./logout";
export default function Header(){
    return(
        <header>
            <Navbar />
        </header>
    )
}
function Navbar(){
    return(
        <nav>
            <a href="/">Reseptikirja</a>
            <a href="/reseptit">Reseptit</a>
            {NavBarItem(<a href="/profile">Profiili</a>, true)}
            {NavBarItem(<Login  />, false)}
            {NavBarItem(<Logout />, true)}
        </nav>
    )
}
function NavBarItem(component: any, isLoggedIn: boolean){
    if(localStorage.getItem('token')){
        if(isLoggedIn){
            return component;
        }
        else{
            return null;
        }
    }
    else{
        if(isLoggedIn){
            return null;
        }
        else{
            return component;
        }
    }
   
}