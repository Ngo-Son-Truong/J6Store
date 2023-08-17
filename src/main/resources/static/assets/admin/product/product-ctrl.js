app.controller("product-ctrl",function($scope,$http){
    $scope.items = [];
    $scope.cates = [];
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
        $http.get("/rest/categories").then(resp => {
            $scope.cates = resp.data;
        })
    }
    //Khởi đầu
    $scope.initialize();

    //xóa form
    $scope.reset = function(){
        $scope.form = {
            createDate: new Date(),
            image: 'cloud-upload.jpg',
            available: true,
        }
    }

    //hiển thị lên form
    $scope.edit = function(item){
        $scope.form = angular.copy(item);
        $(".nav-tabs a:eq(0)").tab('show')
    }

    //thêm sản phẩm mới
    $scope.create = function(){
        var item = angular.copy($scope.form);
        $http.post(`/rest/products`,item).then(resp => {
            resp.data.createDate = new Date(resp.data.createDate)
            $scope.items.push(resp.data);
            $scope.reset();
            alert("Thêm Mới Sản Phẩm Thành Công!");
        }).catch(error => {
            alert("Lỗi Thêm mới sản phẩm!");
            console.log("Error",error);
        });
    }

    //Cập nhật sản phẩm
    $scope.update = function() {
        alert("update")
    }

    //xóa sản phẩm 
    $scope.delete = function (item) {
        alert("delete")
    }
    
    //Upload Hình
    $scope.imageChanged = function(files){
        var data = new FormData();
        data.append('file',files[0]);
        $http.post('/rest/upload/images',data,{
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).then(resp => {
            $scope.form.image = resp.data.name;
        }).catch(error => {
            alert("Lỗi Upload hình ảnh");
            console.log("Error", error);
        })
    }
});