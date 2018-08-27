$(document).ready(function () {
​​
var API = {
  saveUser: function(user) {
   return $.ajax({
    headers: {
     "Content-Type": "application/json"
    },
    type: "POST",
    url: "api/signup",
    data: JSON.stringify(user)
   });
  },
  getUsers: function() {
   return $.ajax({
    url: "api/signin/:email",
    type: "GET"
   });
  },
  saveMeta: function(user) { //saveUser
   return $.ajax({
    headers: {
     "Content-Type": "application/json"
    },
    type: "POST",
    url: "api/username/meta",
    data: JSON.stringify(user)
   });
  },
  updateMeta: function(user) { //saveUser
   return $.ajax({
    headers: {
     "Content-Type": "application/json"
    },
    type: "UPDATE",
    url: "api/username/meta",
    data: JSON.stringify(user)
   });
  },
  getMeta: function() {
   return $.ajax({
    url: "api/username/meta",
    type: "GET"
   });
  },
  newPost: function(user) { //saveUser
   return $.ajax({
    headers: {
     "Content-Type": "application/json"
    },
    type: "POST",
    url: "api/username/post",
    data: JSON.stringify(user)
   });
  },
  getPost: function() {
   return $.ajax({
    url: "api/username/post",
    type: "GET"
   });
  },
 
 
  deleteUser: function(id) {
   return $.ajax({
    url: "api/users/" + id,
    type: "DELETE"
   });
  }
 };
​
​
​
​
​
 var handleMetaSubmit = function (event) {
  event.preventDefault();
​
  var metaData = {
   user_firstname: $("#fnameMeta").val().trim(),
   user_lastname: $("#lnameMeta").val().trim(),
   user_twitter: $("#fnameMeta").val().trim(),
   user_linkedin: $("#fnameMeta").val().trim(),
   user_github: $("#fnameMeta").val().trim(),
   user_website: $("#fnameMeta").val().trim()
​
  };
​
​
   API.saveMeta(metaData).then(function () {
    console.log(metaData);
​
   });
  
​
​
 };
​
 $("#userMetaSubmit").on("click", handleMetaSubmit);
​
​
​
});
Collapse 

Message Input

Message @James Illius