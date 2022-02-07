const chart = [];
function productList() {
  var id = document.getElementById("proID").value;
  var name = document.getElementById("proName").value;
  var price = document.getElementById("proPrice").value;
  checkField(id, name, price);
}
function checkField(id, name, price) {
  if ((id && name && price) != null) {
    console.log(id, name, price);
    var array = fetchData(id, name, price);
    console.log(array);
    console.log(chart);
    chart.push(array);
    var table = document.getElementById("tableData");
    var row = table.insertRow(-1);
    var box1 = row.insertCell(0);
    var box2 = row.insertCell(1);
    var box3 = row.insertCell(2);
    for (var i = 0; i < chart.length; i++) {
      box1.innerHTML = chart[i].productID;
      box2.innerHTML = chart[i].productName;
      box3.innerHTML = "USD " + chart[i].productPrice;
    }
  } else {
    document.getElementById("list").innerHTML =
      "Error !!! Please fill all the fields carefully.";
  }
}
function fetchData(id, name, price) {
  return {
    productID: id,
    productName: name,
    productPrice: price,
  };
}
