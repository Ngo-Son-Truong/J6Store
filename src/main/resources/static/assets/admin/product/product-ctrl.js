app.controller("product-ctrl",function($scope,$http){
    $scope.items = [];
    $scope.form = {};
    
    $scope.initialize = function(){
        //load products
        $http.get("/rest/products").then(resp => {
            $scope.items = resp.data;
            $scope.items.forEach(item => {
                item.createDate = new Date(item.createDate)
            })
        });
        //load categories

    }
    //Khởi đầu
    $scope.initialize();

    //xóa form
    $scope.reset = function(){

    }

    //hiển thị lên form
    $scope.edit = function(item){
        $scope.form = angular.copy(item);
    }

    //thêm sản phẩm mới
    $scope.create = function(){

    }

    //Cập nhật sản phẩm
    $scope.update = function() {

    }

    //xóa sản phẩm 
    $scope.delete = function (item) {

    }
    
    //Upload Hình
    $scope.imageChanged = function(files){

    }
});