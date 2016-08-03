/**
 * Created by morrieati on 8/3/16.
 */
function logOut() {
    localStorage.removeItem('token');
    location.href = '/';
}