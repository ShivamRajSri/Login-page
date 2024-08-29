document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username && password) {
        alert('Login successful!');
        // Here you would typically handle the login process
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});

function handleSSO(provider) {
    alert(`Login with ${provider} is not implemented.`);
    // Here you would typically redirect or handle the SSO login
}
let tmp=document.querySelector(".heading");
setInterval(() => {
    let val1 = Math.ceil(Math.random() * 255);
    let val2 = Math.ceil(Math.random() * 255);
    let val3 = Math.ceil(Math.random() * 255);
    tmp.style.color=`rgb(${val1},${val2},${val3})`;
}, 1000)