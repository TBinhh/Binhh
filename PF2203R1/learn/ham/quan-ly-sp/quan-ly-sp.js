let products = ["Sony Xperia","Samsung Galaxy","Nokia 6","Iphone 11"];

function render() {
    let data = "<table>"
    data += "<tr><td><b>STT</b></td><td><b>Product Name</b></td><td></td><td >"+ products.length + "products"+ "</td></tr>"
    for (let i = 0; i<products.length; i++) {
        data += "<tr>"
        data += "<td>" + (i+1) + "</td>"
        data += "<td>" + products[i] + "</td>"
        data += "<td><button class='btn btn-success' onclick='editProduct("+i+")'>Edit</button> </td>"
        // để ý dấu nháy kép trong html thành nháy đơn
        data += "<td><button class='btn btn-success' onclick='deleteProduct("+i+")'>Delete</button> </td>"
        data += "</tr>"
    }
    data += "</table>"
    document.getElementById("data").innerHTML = data
}

function deleteProduct(index) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này"))
    products.splice(index, 1)
    render()
}
// edit với hàm prompt
// function editProduct(index) {
//     let updateProduct = prompt ("Cập nhật sản phẩm có tên " + products[index] + ":")
//     products[index] = updateProduct;
//     render()
// }
let indexEdit;
// edit với ô input
function editProduct(index) {
    indexEdit = index
    document.getElementById("product").value = products[index]
    document.getElementById("add").value = "Edit"
    document.getElementById("add").setAttribute("onclick","changeValueProductEdit()")
}
function changeValueProductEdit() {
    let updateProduct = document.getElementById("product").value
    products[indexEdit] = updateProduct
    document.getElementById("product").value = ""
    render()
}
function addProduct() {
    let newProduct = document.getElementById("product").value
    products.push(newProduct)
    document.getElementById("product").value = ""
    render()

}


render()