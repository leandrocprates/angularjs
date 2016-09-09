/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var myAppModule = angular.module('mainApp', ['ngSanitize']);

myAppModule.controller("comboController", function ($scope,$http,$sce)
{
    $scope.selecioado = 'nada' ; 
    
    $scope.chamarGet = function(){
        
        var url='http://localhost:8080/WebServiceAngulaJS/rest/generic';
        
        $http.get(url)
                .success(function (data){
                    $scope.registro5=data;
                    console.log('Busca correta');
                    
                    $scope.selecionado  = $scope.registro5[1];
                    $scope.getEmpresa();
                    
                })
                .error(function (data){
                    console.log('Erro na busca ');
                });                
    };
    
    
    
    $scope.getEmpresa = function(){
        
        var url='http://localhost:8080/WebServiceAngulaJS/rest/empresa';
        
        $http.get(url)
                .success(function (data){
                    $scope.empresa=data;
                    console.log('Busca correta empresa:' );
                    console.log($scope.empresa );
                    
                    //seleciona combo de acordo com o retorno 
                    for ( var index in  $scope.registro5 ){
                        if ( $scope.empresa.registro.value == $scope.registro5[index].value ){
                            $scope.selecionado = $scope.registro5[index]; 
                        }
                    }
                    
                    
                    
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
    


