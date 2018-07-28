function loadjson(file,callback) {
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if (xhr.readyState===4 && xhr.status===200) {
			callback(xhr.responseText);
		}
	}
	xhr.send();
}
loadjson("data.json",function(text){
   let data=JSON.parse(text);
      console.log(data);
      basic(data.details);
      carrer(data.careerobject);
      for1(data.education);
      skill(data.skills);


})

var main=document.querySelector(".main");
var left=document.createElement("div");
left.classList.add("left");
main.appendChild(left);
function basic(details1){
var image=document.createElement("img");
image.src=details1.image;
left.appendChild(image);
var name=document.createElement("h1");
name.textContent=details1.name;
left.appendChild(name);
var phone=document.createElement("h1");
phone.textContent=details1.phone;
left.appendChild(phone);
var email=document.createElement("h1");
email.textContent=details1.email;
left.appendChild(email);
}

var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
function for1(details2){
	var h2=document.createElement("h2");
	h2.textContent="educationqualification";
	right.appendChild(h2);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	var ul=document.createElement("ul");
	right.appendChild(ul);
	for (var i=0;i<details2.length;i++) {
		var li=document.createElement("li");
		li.textContent=details2[i].course;
		ul.appendChild(li);
		var p=document.createElement("p");
		p.textContent=details2[i].college;
		ul.appendChild(p);
		var p=document.createElement("p");
		p.textContent=details2[i].per;
		ul.appendChild(p);

	}
}

function skill(skilldata){
	var s=document.createElement("div");
	right.appendChild(s);
	var head=document.createElement("h1");
	head.textContent="Skills Set";
	right.appendChild(head);
	s.appendChild(document.createElement("HR"));
	var t=document.createElement("table");
	var tabledata="";
	for(var i=0;i<skilldata.length;i++){
		tabledata+="<tr><td>"+skilldata[i].title+"</td><td>"+skilldata[i].output+"</td></tr>";
		t.innerHTML=tabledata;
	}
head.appendChild(t);

}
function carrer(carrer1) {
var p1=document.createElement("h1");
p1.textContent="carrerobjective";
right.appendChild(p1);
var p1=document.createElement("p");
p1.textContent=carrer1.c;
right.appendChild(p1);

}