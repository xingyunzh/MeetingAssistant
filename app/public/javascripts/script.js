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
            // if (data.success == true) {
            //     $.get("/user", {
            //         token: data.token
            //     });
            // } else {
            //     console.log(data.success);
            // }
        });
    } else {
        alert("Username cannot be empty!");
        return false;
    }
    return true;
}
