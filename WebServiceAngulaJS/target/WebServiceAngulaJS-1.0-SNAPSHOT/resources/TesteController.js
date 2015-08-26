/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var myAppModule = angular.module('mainApp', []);

myAppModule.controller("oitudobem", function ($scope,$http)
{
    $scope.person = {firstName:"John Maluco", lastName:"Doe", age:50, eyeColor:"blue"};
    
    $scope.registro;
    
    
    $scope.chamarGet = function(){
        
        var url='http://localhost:8084/WebServiceAngulaJS/rest/hello/getRegistro';
        
        $http.get(url)
                .success(function (data){
                    $scope.registro=data;
                    console.log('Busca correta');
                })
                .error(function (data){
                    console.log('Erro na busca ');
                });                
    };
    
    $scope.enviaStringViaJson = function(){
        
        var url='http://localhost:8084/WebServiceAngulaJS/rest/hello/addStringJson';
        var message = 'Mensagem Via Json';
        
        //post no angular é enviado por padrao em JSON 
        $http.post(url, message)
                .success(function (data){
                    console.log('Envio correto');
                })
                .error(function (data){
                    console.log('Erro na busca ');
                });
                
    };
    
    $scope.enviaStringViaText = function(){
        
        var url='http://localhost:8084/WebServiceAngulaJS/rest/hello/addStringText';
        var message = 'Mensagem via Text/Plain';
        
        var req = {
         method: 'POST',
         url: url,
         headers: {
           'Content-Type': 'text/plain'
         },
         data: message
        };     
        
        //Força test/plain in post 
        $http(req)
                .success(function (data){
                    console.log('Envio correto');
                })
                .error(function (data){
                    console.log('Erro na busca ');
                });
                
    };
    
    
    
    
    
});
    

