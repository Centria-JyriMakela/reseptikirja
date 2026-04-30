"use client";
export default function Login(){
    return(
        <LoginForm />
    )
}

function LoginForm(){
    let handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        let username = formData.get('username') as string;
        let password = formData.get('password') as string;
        if(authenticateUser(username, password)){
            //window.location.href = '/profile';
        }
        else{
            alert('Väärä käyttäjätunnus tai salasana');
        }
    }
    return(
        <div>
            <h3>Kirjaudu Sisään</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Käyttäjätunnus</label>
                <input type="text" id="username" name="username" required />
                <label htmlFor="password">Salasana</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Kirjaudu Sisään</button>
            </form>
        </div>
    )
}

function authenticateUser(username: string, password: string): boolean {
    fetch('http://localhost:8000/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({ "username": username, "password": password })
    }).then(response => {
        if(response.status === 200){
            response.json().then(data => {
                localStorage.setItem('token', data.access_token)
            })
        }
        else{
            return false;
        }
    })
    return true;
}