$(document).ready(function () {

  // Get references to page elements
  var $userText = $("#user-text");
  var $userDescription = $("#user-description");
  var $submitBtn = $("#submit");
  var $userList = $("#user-list");
  
  // The API object contains methods for each kind of request we'll make
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
    newMeta: function(user) { //saveUser
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
  
  // refreshUsers gets new users from the db and repopulates the list
  var refreshUsers = function() {
    API.getUsers().then(function(data) {
      var $users = data.map(function(user) {
        var $a = $("<a>")
          .text(user.text)
          .attr("href", "/user/" + user.id);
  
        var $li = $("<li>")
          .attr({
            class: "",
            "data-id": user.id
          })
          .append($a);
  
        $li.append($button);
  
        return $li;
      });
  
      $userList.empty();
      $userList.append($users);
    });
  };
  
  // handleFormSubmit is called whenever we submit a new user
  // Save the new user to the db and refresh the list
  var handleFormSubmit = function(event) {
    event.preventDefault();
  
    var user = {
      text: $userText.val().trim(),
      description: $userDescription.val().trim()
    };
  
    if (!(user.text && user.description)) {
      alert("You must enter an user text and description!");
      return;
    }
  
    API.saveUser(user).then(function() {
      refreshUsers();
    });
  
    $userText.val("");
    $userDescription.val("");
  };
  
  // handleDeleteBtnClick is called when an user's delete button is clicked
  // Remove the user from the db and refresh the list
  var handleDeleteBtnClick = function() {
    var idToDelete = $(this)
      .parent()
      .attr("data-id");
  
    API.deleteUser(idToDelete).then(function() {
      refreshUsers();
    });
  };
  
  // Add event listeners to the submit and delete buttons
  // $submitBtn.on("click", handleFormSubmit);
  // $userList.on("click", ".delete", handleDeleteBtnClick);
  
  
  
  var handleSignup = function (event) {
    event.preventDefault();
    var userSignUp = {
      email: $("#userSignUpEmail").val().trim(),
      password: $("#userSignUpPassword").val().trim()
  
    };
  
    API.saveUser(userSignUp).then(function () {
      console.log("new user created");
    
    });
  console.log("hello");
  };
  
  $("#userSignUp").on("click", handleSignup);
  
  
  
  });