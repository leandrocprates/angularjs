/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var myAppModule = angular.module('mainApp', ['ngSanitize']);

myAppModule.controller("comoController", function ($scope,$http,$sce)
{
    $scope.selecioado = 'nada' ; 
    
    $scope.chamarGet = function(){
        
        var url='http://localhost:8084/WebServiceAngulaJS/rest/generic';
        
        $http.get(url)
                .success(function (data){
                    $scope.registro5=data;
                    console.log('Busca correta');
                    
                    //$scope.selecioado  = $scope.registro5[1];
                    $scope.getEmpresa();
                    
                })
                .error(function (data){
                    console.log('Erro na busca ');
                });                
    };
    
    
    
    $scope.getEmpresa = function(){
        
        var url='http://localhost:8084/WebServiceAngulaJS/rest/empresa';
        
        $http.get(url)
                .success(function (data){
                    $scope.empresa=data;
                    console.log('Busca correta empresa:' );
                    console.log($scope.empresa );
                    
                    $scope.selecioado  = data.registro;
                    
                })
                .error(function (data){
                    console.log('Erro na busca ');
                });                
    };
    
    
    
    $scope.init = function(){
        $scope.chamarGet();
        //$scope.getEmpresa();
    };
    
    $scope.init();
    
    
});
    


