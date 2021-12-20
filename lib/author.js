module.exports = {
    isOwner:function(request, response) {
        if (request.session.is_logined) {
            return true;
        } else {
            return false;
        }
    },
    statusUI:function(request, response) {
        var authStatusUI = '<a class="nav-link" href="/login">로그인</a>'
        if (this.isOwner(request, response)) {
            authStatusUI = `<a class="nav-link" href="/logout_process">로그아웃</a>`;
        }
        return authStatusUI;
    }
}