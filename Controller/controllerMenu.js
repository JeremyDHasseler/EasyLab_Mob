loadApp();
app.controller("controllerMenu", function($scope){
       
        $scope.showProduct = false;
        $scope.showStore = false;
        $scope.showEquipment = false;
        
        $scope.ShowProduct = function(){
            $scope.showProduct = true;
            $scope.showStore = false;
            $scope.showEquipment = false;
        };
        $scope.ShowStore =function(){
            $scope.showStore = true;
            $scope.showProduct = false;
            $scope.showEquipment = false;
        };
        $scope.ShowEquipment = function(){
            $scope.showEquipment = true;
            $scope.showProduct = false;
            $scope.showStore = false;
        };
        
        $scope.GetRest = function(){
            var rest = "test";
            var c = 8;
        };
});