console.log('checklogin.js loaded');

async function checklogin() {
    console.log('checklogin() called');

    const cookie = document.cookie;
    const token = cookie ? cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1] : null;
    console.log(token);

    if (token) {
        const getUserData = await fetch(`https://api.dachats.online/api/auth/login?token=${token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (!getUserData.ok) {
            alert('Hiba történt a bejelentkezés során!');
            window.location.href = '../index.html';
            return;
        }

        const userData = await getUserData.json();
        console.log(userData);

        const username = await userData.data.name;
        const avatar = await userData.data.avatar;
        const email = await userData.data.email;
        const id = await userData.data.id;


        console.log(username);
        console.log(avatar);

        const div = document.getElementById('profile');
        div.innerHTML = `
        <div class="align-items-center d-flex flex-column">
                    <img src="https://api.dachats.online/api/files?filename=${avatar}" alt="user" class="chat-img" style="width: 150px; height: 150px; border-radius: 50%;  border: 12.5px solid #1C1C1C;" onerror="this.style.display='none'; document.querySelector('.status-dot').classList.add('online');">
                    <a class="nav-link" class="mt-2"><img src="../../images/pp.png" alt="avatar" class="mt-3"></a> 
                </div>
                <div class="row m-3">
                    <div class="col-4"><h6>Megjelenített Név</h6><p>${username}</p></div>
                    <div class="col-4"><h6>E-mail</h6><p>${email}</p></div>
                    <div class="col-4"><h6>Felhasználó Azonosító</h6><p>${id}</p></div>
                </div>
        `;

    } else {
        window.location.href = '../index.html';
        return;
    }
}

checklogin();