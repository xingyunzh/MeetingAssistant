/**
 * Created by morrieati on 7/24/16.
 */

function logIn() {
    //var username = $("#username")[0].value;
    var username = $("#username").val();
    var password = $("#password").val();
    console.log(username);
    if (username !== "") {
        $.post("/user/login", {
            username: username,
            password: password
        }, function (data) {
            if (data.success == true) {
                localStorage.setItem('token', data.token);
                var tokenHeader = {
                    headers: {'x-access-token': data.token}
                };
                $.ajax('/meeting', tokenHeader).done(function (page) {
                    history.replaceState(tokenHeader, "Meeting",location.origin + "/meeting");
                    document.write(page);
                });
            } else {
                $("#login-button")
                    .addClass("btn-danger")
                    .removeClass("btn-success")
                    .text("Wrong Username or Password!");
            }
        });
    } else {
        alert("Username cannot be empty!");
        return false;
    }
    return true;
}

function setLoginButtonDefault() {
    $("#login-button")
        .addClass("btn-success")
        .removeClass("btn-danger")
        .text("Login");
}