/**
 * Created by morrieati on 7/24/16.
 */

function verifyID() {
    var username = $("#username").val();
    var password = $("#password").val();
    var email = $("#email").val();

    if (username !== "") {
        $.post("/verification", {
                username: username,
                password: password,
            }, function (data) {
                console.log(data);
                if (data.body.success == true) {
                    localStorage.setItem('token', data.body.token);
                    var tokenHeader = {
                        headers: {'x-access-token': data.body.token}
                    };
                    location.href = '/meeting/menu';
                    // $.ajax('/meeting', tokenHeader).done(function (page) {
                    //     history.replaceState(tokenHeader, "Meeting", location.origin + "/meeting");
                    //     document.write(page);
                    // })
                }
                else {
                    $("#verify-button")
                        .addClass("btn-danger")
                        .removeClass("btn-success")
                        .text(data.body.message);
                }
            }
        );
    } else {
        alert("Username cannot be empty!");
        return false;
    }
    return true;
}

function setLoginButtonDefault() {
    $("#verify-button")
        .addClass("btn-success")
        .removeClass("btn-danger")
        .text("Login");
}
