let allUsers = [{
    Name: "Andrew",
    gender: "male"
},{
    Name: "Manan",
    gender: "male"
},{
    Name: "Kriti",
    gender: "female"
}];

for(let i=0; i<allUsers.length; i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["Name"]);
    }
}