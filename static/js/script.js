$(document).ready(function () {
    console.log("ready!");
    var socket = io.connect();
    console.log("connected to io!");

    $('#addbutton').click(function (e) {
        // console.log('clicked');
        socket.emit('add', {})
    })

    socket.on('addcount', (counter) => {
        console.log(counter);
        $('#counter').text(counter)
    })

    $('#reset').click(function (e) {
        // console.log('clicked');
        socket.emit('reset', {})
    })

})