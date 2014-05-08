app.service("productService", function($http){
   this.resultRest = function(){
      return $http.get({
                method:"GET",
                url:"http://localhost:8000/Service1.svc/Hello"
                
             });
   };
});
app.controller("controllerProduct", function($scope,persistProduct,$http){
    //var $scope = this;
    $scope.showProduct = false; 
    $scope.TextTest= "Voici un super texte";
    $scope.textString = "TextString";    
    $scope.showEdit = false;
    $scope.showList = true;
    
    $scope.products = [];
    
    $scope.resultRest;
    /*productService.resultRest().then(function(dataResponse){
        $scope.resultRest = dataResponse;
    });*/
    $scope.ShowAdd = function(){
        $scope.showEdit = true;
        $scope.showList = false;
    };
    $scope.ShowList = function(){
        $scope.showList = true;
        $scope.showEdit = false;
    };
    
    $scope.load = function(){
        var restResult;
         /*$http.get("http://localhost:8000/Service1.svc/Hello").        
                  success(function(data){
                    alert(data);
                  }).
                  error(function(data){
                      alert("we have some error"+ data);
                  })*/
        //alert($scope.resultRest);
        persistProduct.list($scope);
        var result ="super";
    };
    
    $scope.showError=function(){
        //var t = ;
        persistProduct.add($scope);
        //var t = "something";
    };
    
    $scope.addProduct = function(){
        var message;
        try{
            if($scope.text_Name !== "" && $scope.text_Categories !== ""){
            //Instanciate the new product;
            var newProduct = new Product();
            newProduct.Name = $scope.Text_Name;
            newProduct.Identification = $scope.Text_Identification;
            newProduct.Description = $scope.Textarea_Description;
            newProduct.Lapsing = $scope.Text_Lapsing;
            
            persistProduct.add(newProduct); 
        
            $scope.products.push(newProduct);
        
            //Clear control input
            $scope.text_Name = "";
            $scope.text_Categories = "";
            
            message = "le produit à bien été ajouté !"
            }else{
                message = "Les champs nom et catégories sont obligatoire !"
            }
        }catch(ex){
            message = "Nous avons détecté une erreur : "+ex;
        }finally{
            alert(message);
        }
    };
    

    $scope.Refresh = function(){$scope.$apply();};
    $scope.load();
    
    /*
    
        Special Effect View
    
    */
    
    var links = angular.element(document.querySelectorAll("li.topcoat-list__item"));
    links.on("click", function(){
        //links.hide();
        //this.show();
    });    
});

