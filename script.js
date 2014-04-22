var users_joined = [];
var chatrooms = {'west_side':{}, 'east_side':{}};

window.new_user_joined = function(name) {
	users_joined.unshift(name);
	console.log(users_joined);
}

//this function is only called once by the server every five seconds
window.assign_to_chatroom = function() {
	var userToAdd = users_joined.pop();
	var westSideUsers = Object.keys(chatrooms.west_side).length;
	var eastSideUsers = Object.keys(chatrooms.east_side).length;
	//add this element for every user assigned to a chatroom: <p><button type="button" class="btn btn-warning btn-xs">[[name]]</button></p>
		
	if (!chatrooms.west_side.hasOwnProperty(userToAdd) && !chatrooms.east_side.hasOwnProperty(userToAdd)){
		if (westSideUsers > eastSideUsers){
			if (!chatrooms.east_side.hasOwnProperty(userToAdd)) {
	    	$(".chat-2 > .users").append('<p><button type="button" class="btn btn-warning btn-xs">' + userToAdd + '</button></p>');
			}
			chatrooms.east_side[userToAdd] = userToAdd;
		} else {
			if (!chatrooms.west_side.hasOwnProperty(userToAdd)) {
			$(".chat-1 > .users").append('<p><button type="button" class="btn btn-warning btn-xs">' + userToAdd + '</button></p>');
			}
			chatrooms.west_side[userToAdd] = userToAdd;
		}
	}
    console.log("assigning users to rooms");
    console.log(westSideUsers);
    console.log(eastSideUsers);

}