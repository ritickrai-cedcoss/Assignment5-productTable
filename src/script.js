const chart = [];
function addProduct() {
  var id = document.getElementById("proID").value;
  var name = document.getElementById("proName").value;
  var price = document.getElementById("proPrice").value;
  var array = fetchData(id, name, price);
  valid(id, name, price);
  chart.push(array);
  display(id, name, price);
}

function fetchData(id, name, price) {
  return {
    productID: id,
    productName: name,
    productPrice: price,
  };
}

function valid(id, name, price) {
  for (var i = 0; i <chart.length; i++) {
    if (id == chart[i].productID) {
      window.alert("This product ID already exist !!!");
      return exit;
    } else {
      if (id.length == 0 || name.length == 0 || price.length == 0) {
        window.alert("Please fill all the fields.");
        return exit;
      }
    }
  }
}

function display(id, name, price) {
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
}
