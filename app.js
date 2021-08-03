var express = require("express");
var app=express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
var friends=[];

app.post("/addFriend",function(req,res){
	console.log(req.body.newfriend);
	var arr=req.body.newfriend.split(' ');
	console.log(arr)
	x = onlyDigits(arr)
	function isNumeric(n) {
  	return !isNaN(parseFloat(n)) && isFinite(n);
	}
	function onlyDigits(newfriend) {
  for (let i = arr.length - 1; i >= 0; i--) {
  	const d = arr[i]
    if (!isNumeric(d)) return false
    
  }
  return true
  }
  if (x==true){
  	var odd = []
   var even=[]
   for (let i = arr.length - 1; i >= 0; i--) {
   	let y = Number(arr[i])
   	if (y%2==0) even.push(arr[i])
   	else odd.push(arr[i])
  	}
  console.log(even,odd)

  }
  z ={
  	"is_success":x,
  	"odd":odd,
  	"even":even
  }


	res.send(z)
	
})
app.get("/friends",function(req,res){

	res.render("friends",{friends:friends});
})

app.listen(3000,function () {
	// body...
	console.log("Server Started!!!")
})