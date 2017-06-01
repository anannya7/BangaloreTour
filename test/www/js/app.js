// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionicValidateWithToast', 'ionic-toast'])

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

     $stateProvider
       .state('home', {
    url: "/home",
    templateUrl: 'templates/home.html'
})
    .state('wonder', {
    url: "/wonder",
    templateUrl: 'templates/wonder.html'
}) 
     .state('iskon', {
    url: "/iskon",
    templateUrl: 'templates/iskon.html'
}) 
     .state('page4', {
    url: "/page4",
    templateUrl: 'templates/page4.html'
}) 
      .state('about', {
    url: "/about",
    templateUrl: 'templates/about.html'
}) 
      .state('page5', {
    url: "/page5",
    templateUrl: 'templates/page5.html'
}) 
       .state('page6', {
    url: "/page6",
    templateUrl: 'templates/page6.html'
}) 
         .state('food', {
    url: "/food",
    templateUrl: 'templates/food.html'
}) 
        .state('page7', {
    url: "/page7",
    templateUrl: 'templates/page7.html'
}) 
 .state('taaza', {
    url: "/taaza",
    templateUrl: 'templates/taaza.html'
}) 
 .state('ritz', {
    url: "/ritz",
    templateUrl: 'templates/ritz.html'
}) 

        .state('barbe', {
    url: "/barbe",
    templateUrl: 'templates/barbe.html'
}) 
         .state('graze', {
    url: "/graze",
    templateUrl: 'templates/graze.html'
}) 

          .state('black', {
    url: "/black",
    templateUrl: 'templates/black.html'
}) 
          .state('rajdhani', {
    url: "/rajdhani",
    templateUrl: 'templates/rajdhani.html'
}) 
       
$urlRouterProvider.otherwise('/home'); 


})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });



})
.controller("MailgunController",function($scope, $http, $state,$ionicPopup) {



 

 
  

    var mailgunUrl = "sandbox0a10df9297e146c0a6ac1f39e4e68f15.mailgun.org";
    var mailgunApiKey = window.btoa("api:key-da709f394d0f45d228ecd98d94a88bf8")

    $scope.userNameErrorTips = {

      
      required:  'please enter your mail id',

      minlength: 'This field does not match the min length',
      maxlength: 'This field does not match the max length',
      pattern: 'This is not a valid mail id',
      number: 'This field should be a number'
    }
     $scope.passwordErrorTips = {
      required: 'please Enter Your Search',
     
    }

 
    $scope.send = function(recipient,message) {
        $http(
            {
                "method": "POST",
                "url": "https://api.mailgun.net/v3/sandbox0a10df9297e146c0a6ac1f39e4e68f15.mailgun.org"
 + "/messages",
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Basic " + mailgunApiKey
                },
                data: "from=" + "anannya.mistry@gmail.com" + "&to=" + "anannya.mistry@gmail.com" +"&subject=" + recipient  + "&text=" + message
            }
        ).then(function(success) {
            console.log("SUCCESS " + JSON.stringify(success));
              var alertPopup = $ionicPopup.alert({
      
      template: 'Your Mail Has Been Sent'
    });
        }, function(error) {
            console.log("ERROR " + JSON.stringify(error));
        });
    }
   
 
})


