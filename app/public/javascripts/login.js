/**
 * Created by morrieati on 7/24/16.
 */

function verifyID() {
    var username = $("#username").val();
    var password = $("#password").val();

    if (username !== "") {
        $.post("/verification", {
                username: username,
                password: password,
            }, function (data) {
                console.log(data);
                if (data.body.success == true) {
                    localStorage.setItem('token', data.body.token);
                    location.href = '/meeting/menu';
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
        alert("用户名不能为空!");
        return false;
    }
    return true;
}

function setLoginButtonDefault() {
    $("#verify-button")
        .addClass("btn-success")
        .removeClass("btn-danger")
        .text("登录");
}
