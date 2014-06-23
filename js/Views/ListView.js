define(function() {

    function render(params) {
        var appDiv = document.getElementById('app');
        var users = params.users;
        var html = '<ul>';

        for (var i = 0, len = users.length; i < len; i++) {
            html += '<li>' + users[i].name + '</li>';
        }
        html += '</ul>';
        appDiv.innerHTML = html;
    }

    return {
        render: render
    };


});
