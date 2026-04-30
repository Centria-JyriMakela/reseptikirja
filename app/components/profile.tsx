"use client";
export default function Profile(){
    return (
        <ProfilePage />
    )
}

function ProfilePage(){
    let userData: any;

    userData = JSON.parse(atob(localStorage.getItem('token')?.split('.')[1] || ''));

    return (
        <div>
            <h3>Profiili</h3>
            <p>Käyttäjätiedot:</p>
            <p>Käyttäjänimi: {userData.username}</p>
            <p>Näyttönimi: {userData.display_name}</p>
            <p>Käyttäjän ID: {userData.user_id}</p>

        </div>
    )
}