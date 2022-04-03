var stompclient=null;

function connect(){
	let socket=new SockJS("/server1");
	
	stompclient=Stomp.over(socket)
	
	stompclient.connect({},function(frame){
		
		console.log("connected:"+frame)
		
		$("#name-form").addClass('d-none')
		$("#chat-room").removeClass("d-none")
		
		stompclient.subscribe("/topic/return-to",function(res){
				showMessage(JSON.parse(res.body))
		})
	})
}

function showMessage(message){
	console.log("in show message")
		 $("#msg-container-tbl").prepend(`<tr><td><b>${message.name} :</b> ${message.content}</td></tr>`)

}

function sendMessage(){
	
	console.log("in send function")
	let obj_json={
		name:localStorage.getItem('name'),
		content:$("#message_value").val()
	}
	
	stompclient.send("/app/message",{},JSON.stringify(obj_json))
}

$(document).ready((e)=>{
	
	$("#login").click(()=>{
		
		let name=$("#name_value").val();
		localStorage.setItem("name",name);
	
	  $("#name-title").html(`Welcome , <b>${name} </b>`)
		
		connect();
	})
	
	$("#send-btn").click(()=>{
		console.log("in send btn")
		sendMessage()
	})
	
	
	$("#logout").click(()=>{

 console.log("logout")
   localStorage.removeItem("name")
    if(stompclient!==null)
    {
        stompclient.disconnect()

         $("#name-form").removeClass('d-none')
         $("#chat-room").addClass('d-none')
        
    }

})
	
})