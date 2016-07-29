/**
 * Created by Administrator on 2016/7/20.
 */
function logIn() {
    var username = $("#username")[0].value;
    if (username !== "") {
        var password = $("#password")[0].value;
        $.post("/", {
            username: username,
            password: password
        }, function (data) {
            console.log(data);
        });
    } else {
        alert("Username cannot be empty!");
        return false;
    }
    return true;
}