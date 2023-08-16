const app = angular.module("shopping-cart-app",[]);

app.controller("shopping-cart-app",function ($scope,$http) {
    // Quản lí Giỏ hàng
    $scope.cart ={
        items: [],

        add(id){
            alert("hello ba da")
        },

        remove(id){},

        clear(){},

        amt_of(item){},

        get count(){},

        get amount(){},
        

    }
})