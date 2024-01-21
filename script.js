// JavaScript source code
function addData() {
    // Get input values 
    var name =
        document.getElementById("nameInput").value;
    var quantity =
        document.getElementById("quantityInput").value;

    // Get the table and insert a new row at the end 
    var table = document.getElementById("outputTable");
    var newRow = table.insertRow(table.rows.length);

    // Insert data into cells of the new row 
    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = quantity;

    // Clear input fields 
    clearInputs();
}
function clearInputs() {

    // Clear input fields 
    document.getElementById("nameInput").value = "";
    document.getElementById("quantityInput").value = "";
}