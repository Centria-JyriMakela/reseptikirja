export default function Logout(){
    return(
        <LogOutButton />
    )
}
function LogOutButton(){
    let handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }
    return(
        <button onClick={handleLogout}>Kirjaudu Ulos</button>
    )
}