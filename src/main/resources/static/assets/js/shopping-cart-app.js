const app = angular.module("shopping-cart-app",[]);

app.controller("shopping-cart-app",function ($scope,$http) {
    // Quản lí Giỏ hàng
    $scope.cart ={
        items: [],

        add(id){
            var item = this.items.find(item => item.id == id);
            if (item) {
                item.qty++;
                this.saveToLocalStorage();
            } else {
                $http.get(`/rest/products/${id}`).then(resp => {
                    resp.data.qty = 1;
                    this.items.push(resp.data);
                    this.saveToLocalStorage();
                })
            }
        },

        remove(id){
            var index = this.items.findIndex(item => item.id == id);
            this.items.splice(index,1);
            this.saveToLocalStorage();
        },

        clear(){},

        amt_of(item){},
        //tổng các mặt hàng trong giỏ hàng
        get count(){
            return this.items
                .map(item => item.qty)
                .reduce((total,qty) => total += qty,0);
        },
        // tổng số tiền các mặt hàng trong giỏ
        get amount(){
            return this.items
                .map(item => item.qty * item.price)
                .reduce((total,qty) => total += qty,0);
        },
        // lưu giỏ hàng vào local storage
        saveToLocalStorage(){
            var json = JSON.stringify(angular.copy(this.items));
            localStorage.setItem("cart",json);
        },
		//đọc giỏ hàng từ local storage
		loadFromLocalStorage(){
			var json = localStorage.getItem("cart");
			this.items = json ? JSON.parse(json): [];			
		}		
    }
    $scope.cart.loadFromLocalStorage();
})