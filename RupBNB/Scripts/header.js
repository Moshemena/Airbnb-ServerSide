//load header when page ready
$(document).ready(function() {

    //Default header options
    let manager ='';
    let isLogin = '<li><a class="dropdown-item" href="login.html">Log In</a></li>'
    let userLink = '<li><a class="dropdown-item" href="signUp.html">Sign Up</a></li>'

    
    if (localStorage["CGroup4_user"] != undefined) {
        user = JSON.parse(localStorage["CGroup4_user"]);
        //Header options when user log in
        if (user.Email != "admin@gmail.com") {
            userLink = '<li><a class="dropdown-item" href="profilePage.html">Profile</a></li>'
            isLogin = '<li><a onclick="logOut()" class="dropdown-item" href="#">Log Out</a></li>'
        }
        //Header options when manager logIn
        else{
            manager =
                `
                <li class="nav-item">
                    <a class="nav-link" href="adminView.html">Manager</a>
                </li>
            `;

            isLogin = '<li><a onclick="logOut()" class="dropdown-item" href="#">Log Out</a></li>';
            userLink = '';
        }
    }
    
    //render the navbar
    $("#MainHeader")
    .append(
        `
            <nav id="NavBar" class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="index.html"><img id="headerImg" src="../images/airbnb.png" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                            </li>
                            ${manager}
                        </ul>
                        <div class="dropdown" id="profileBTN">
                            <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-user"></i>
                            </a>
                        
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                            ${isLogin}
                            ${userLink}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        `
  )

});

//User loged out
//remove user / mangager from session storage and redirect to index.html
function logOut() {
    localStorage.removeItem("CGroup4_user");
    window.location.replace("index.html");
}