/**
 * Created by iamabjain on 14/7/17.
 */
var username=prompt("Enter Username");
//console.log(username);
$(function(){
    $("#WELCUM").append(username);

    var socket = io();
    $('#inp').keydown(function(event) {
        if (event.keyCode == 13) {
            var inp=$('#inp').val();
            if(inp!=="") {
                socket.emit('rec_message', {user: username, input: inp});
                scrollToBottom();
            }//Write your code here
        }
    });
    $('#btn').click(function(){
        var inp=$('#inp').val();
        if(inp!=="")
        socket.emit('rec_message',{user:username,input:inp});
        });

    socket.on('getPrev',function(data) {
        var msg="";
        for( var i in data)
        msg+="<li id='msgbox'><b>"+data[i].user +"</b> :  "+ data[i].input+ "</li>";
        $('#message').append(msg);
    });
socket.on('get',function(data) {
    var msg="";
    msg="<li id='msgbox'><b>"+data.user +" </b> :  "+ data.input+ "</li>";
    $('#message').append(msg);
    });

    $("#Bottom").click(function(){
        console.log("All time Low");
        scrollToBottom();
    });

    function scrollToBottom()
    {
        $(".BOX").scrollTop = $(".BOX").scrollHeight;
        $(".BOX").scrollIntoView()
    }
});

