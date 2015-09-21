angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$ionicPopup,$timeout) {
    $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
        title: 'Agenda' ,
        template: 'Datos guardados'
        
         });
    
    }
    


$scope.guardar = function(persona){
    console.log("Nombre: "+persona.nombre);
    console.log("Apellido: "+persona.apellido);
    console.log("Telefono: "+persona.telefono);
    console.log("Email: "+persona.email);

}
})


.controller('ChatsCtrl', function($scope, Chats) {
 

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
