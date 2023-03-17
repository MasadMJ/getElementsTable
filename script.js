// Get all table elements on the page
const tables = document.getElementsByTagName("table");

// Loop through each table and extract the data
for (let i = 0; i < tables.length; i++) {
  const table = tables[i];
  
  // Get all rows in the current table
  const rows = table.getElementsByTagName("tr");
  
  // Loop through each row and extract the data
  for (let j = 0; j < rows.length; j++) {
    const row = rows[j];
    
    // Get all cells in the current row
    const cells = row.getElementsByTagName("td");
    
    // Loop through each cell and extract the data
    for (let k = 0; k < cells.length; k++) {
      const cell = cells[k];
      
      // Print the contents of the current cell
      console.log(cell.innerText);
    }
  }
}
