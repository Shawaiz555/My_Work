const Signupbtn = document.getElementById('Signupbtn');
let LoginedUserName = document.querySelector('#LoginedUserName');
const Username = localStorage.getItem('LoggedInUser');
if(Username == null)
{
    LoginedUserName.innerHTML = `
        <a href="#"
                    ><img
                      class="shoppingicon"
                      src="./shoppingicon.png"
                      alt="Shopping icon"
                      width="30"
                      height="30"
                  /></a>
    `
}
else
{
    LoginedUserName.innerHTML = Username;
    let LogOutbtn = document.querySelector('#LogOutbtn');
        LogOutbtn.innerHTML = `
            <button class="LogOutbtn">LOG OUT</button>
        `;
        let Signuplink = document.getElementById('Signuplink');
        let Loginlink = document.getElementById('Loginlink');
        Signuplink.style.display = 'none';
        Loginlink.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    Signupbtn.onclick = function() {
        let UserName = document.getElementById('Fullname').value;
        let UserEmail = document.getElementById('Email').value;
        let UserPassword = document.getElementById('Password').value; // Restriction on what type of password you have to enter working remaining like(specialcharacter,number,capital letter or small letter)
        let UserConfirmPassword = document.getElementById('ConfirmPassword').value;

        let Current_User_Id = localStorage.getItem('Current_User_Id');
        Current_User_Id = parseInt(Current_User_Id, 10);

        if (isNaN(Current_User_Id))
        {
            Current_User_Id = 1;
        } 
        else
        {
            Current_User_Id += 1;
        }

        if (UserPassword === UserConfirmPassword) {
            const UserDetails = JSON.parse(localStorage.getItem('UserDetails')) || [];

            let UserConfirm = UserDetails.find(user => user.Email === UserEmail);
            if (UserConfirm)
            {
                alert('User already exists!!');
            }
            else
            {
                let User = {
                    UserID: Current_User_Id,
                    Name: UserName,
                    Email: UserEmail,
                    Password: UserPassword,
                    ConfirmPassword: UserConfirmPassword
                };

                UserDetails.push(User);

                localStorage.setItem('UserDetails', JSON.stringify(UserDetails));
                localStorage.setItem('Current_User_Id', Current_User_Id);

                alert('SignUp Successful');
            }
        } else {
            alert('Password and Confirm Password should be the same!!');
        }
    };
});
const LogOutbtn = document.getElementById('LogOutbtn');
LogOutbtn.onclick = function()
{
    localStorage.removeItem('LoggedInUser');
    alert('Logged Out Successfully');
    let Signuplink = document.getElementById('Signuplink');
    let Loginlink = document.getElementById('Loginlink');
    Signuplink.style.display = 'block';
    Loginlink.style.display = 'block';
    let LoginedUserName = document.querySelector('#LoginedUserName');
    LoginedUserName.innerHTML = `
        <a href="#"
                    ><img
                      class="shoppingicon"
                      src="./shoppingicon.png"
                      alt="Shopping icon"
                      width="30"
                      height="30"
                  /></a>
    `;
    let LogOutbtn = document.querySelector('#LogOutbtn');
        LogOutbtn.innerHTML = `
            <a href="#"
                    ><img
                      class="contacticon"
                      src="./contacticon.png"
                      alt="Contact icon"
                      width="30"
                      height="30"
                  /></a>
        `;
}