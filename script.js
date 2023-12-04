function myFunction() {
  var table = document.getElementById("animals");

  // Create a new row and cells
  var newRow = table.insertRow(table.rows.length);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);

  // Set the content of the cells
  cell1.innerHTML = 'New Animal ';
  cell2.innerHTML = 'Description for the new animal';

  // Optionally, you can add an image as well
  var img = document.createElement("img");
  img.src = "https://placehold.it/100x100"; // Placeholder image URL
  img.alt = "New Animal Image ";
  img.classList.add("img-thumbnail");
  cell1.appendChild(img);
}
