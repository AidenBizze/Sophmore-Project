/**
 * 
 */

 var date= new Date(); 
	 
 function RenderDate(){
	 

 date.setDate(1);
 var day = date.getDay();
 console.log(date.getDay());
 
  var anyDate= new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
  
 
 var prevDate = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
 
 var today = new Date();
 var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November","December"];
 

 
 document.getElementById("date_str").innerHTML = date.toDateString();
 document.getElementById("month").innerHTML = months[date.getMonth()];
 
 
 
 
     var box = "";
     
     for(x=day; x>0; x--){
		 box+= "<div class='pre' >" + (prevDate - x + 1) + "</div>";
	 }
     
     
     for(i = 1; i<=anyDate; i++){
		if(i == today.getDate() && date.getMonth()== today.getMonth()){
			box+= "<div class= 'today'>" + i + "</div>";
		} else {
			box+= "<div>" +i + "</div>";
		}
	
		

	 }
	 
	 document.getElementsByClassName("days")[0].innerHTML= box;
	 }
     
     function moveDate(para){
		 if(para  == 'prev'){
			 date.setMonth(date.getMonth()- 1);
			 RenderDate();
		 }else if(para == 'next'){
			 date.setMonth(date.getMonth()+ 1);
		 }
		 RenderDate();
	 }
     
     
 