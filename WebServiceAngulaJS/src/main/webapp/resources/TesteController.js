/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var myAppModule = angular.module('mainApp', ['ngSanitize']);

myAppModule.controller("oitudobem", function ($scope,$http,$sce)
{
    $scope.person = {firstName:"John Maluco", lastName:"Doe", age:50, eyeColor:"blue"};
    
    $scope.registro;
    
    
    $scope.chamarGet = function(){
        
        var url='http://localhost:8080/WebServiceAngulaJS/rest/hello/getRegistro';
        
        $http.get(url)
                .success(function (data){
                    $scope.registro=data;
                    console.log('Busca correta');
                })
                .error(function (data){
                    console.log('Erro na busca ');
                });                
    };
    
    $scope.adicionarRegistro = function(){
        
        var url='http://localhost:8080/WebServiceAngulaJS/rest/hello/addRegistro';
        
        var registro2 = {coluna:"Nome", valor:"Jose 1"};
        registro2.usuario={nome: "Jose 2", telefone:"1122333018"};
        
        
        $http.post(url,registro2)
                .success(function (data){
                    console.log('Usuario adicionado com sucesso.');
                })
                .error(function (data){
                    console.log('Erro ao adicionar usuario.');
                });
    };
    
    
    $scope.enviaStringViaJson = function(){
        
        var url='http://localhost:8080/WebServiceAngulaJS/rest/hello/addStringJson';
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
        
        var url='http://localhost:8080/WebServiceAngulaJS/rest/hello/addStringText';
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
    
    
    $scope.enviaStringViaPostForm = function(){
        
        var url='http://localhost:8080/WebServiceAngulaJS/rest/hello/addStringPostForm';
        
        
        var req = {
         method: 'POST',
         url: url,
         headers: {
           'Content-Type': 'application/x-www-form-urlencoded'
         },
         data: 'id=23&nome=Leandro'
        };     
        
        //Força application form in post 
        $http(req)
                .success(function (data){
                    console.log('Envio correto');
                })
                .error(function (data){
                    console.log('Erro na busca ');
                });
                
    };
    

    // Aceita html com funcoes de script  exemplo onmouseover  
    $scope.trustedHtml = $sce.trustAsHtml( 
         'I am an <code>HTML</code>string with ' +
         '<a href="#">links!</a> and other <em>stuff</em> <p/>'+
         '<a onmouseover=alert("careful!") href="http://google.com">Google</a>' ) ;


    // Nao aceita funcoes de html como onmouseover
    $scope.NonTrustedHtml =  
         'I am an <code>HTML</code>string with ' +
         '<a href="#">links!</a> and other <em>stuff</em> <p/>'+
         '<a onmouseover=alert("careful!") href="http://google.com">Google</a>'  ;



    //Aceita html com funcoes angularjs como por exemplo ng-click
    $scope.AngularTrustedHtml =$sce.trustAsHtml( '<button type="button" class="btn btn-primary" ' +
                                                'ng-click="chamarGet()" >Chamar Get</button>' ) ;

    
    
    
});
    

/* Referencia : http://odetocode.com/blogs/scott/archive/2014/09/10/a-journey-with-trusted-html-in-angularjs.aspx */
myAppModule.directive("compileHtml", function($parse, $sce, $compile) {
    return {
        restrict: "A",
        link: function (scope, element, attributes) {
 
            var expression = $sce.parseAsHtml(attributes.compileHtml);
 
            var getResult = function () {
                return expression(scope);
            };
 
            scope.$watch(getResult, function (newValue) {
                var linker = $compile(newValue);
                element.append(linker(scope));
            });
        }
    }
});

