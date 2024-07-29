console.log("hello main js ............");

function OnotaionTestOne(n) {
    // O(1) for fixed size n = 10
    const startTime = performance.now();
  
    console.log("O(1) Function Start");
    for (var i = 0; i < n; i++) {
      console.log(i);
    }
    console.log("O(1) Function End");
  
    const endTime = performance.now();
    console.log(`Total time taken for O(1) function: ${(endTime - startTime) / 1000} seconds`);
    
    return OnotaionTestOne;
  }
  
  OnotaionTestOne(10);
  

// OnotaionTestOne(10);

function OnotaionTestTwo(n) {
  //o(n2)

  const matrixContainer = document.createElement("div");

  for (var i = 0; i < n; i++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    for (var j = 0; j < i; j++) {
      const emptyCell = document.createElement("span");
      emptyCell.style.width = "20px"; // Adjust width as needed
      row.appendChild(emptyCell);
    }
    for (var j = i; j < n; j++) {
      const cell = document.createElement("span");
      cell.style.width = "20px"; // Adjust width as needed
      cell.style.textAlign = "center";
      cell.textContent = j;
      row.appendChild(cell);
    }
    matrixContainer.appendChild(row);
  }

  document.body.appendChild(matrixContainer);

  return OnotaionTestTwo;
}

//   OnotaionTestTwo(80);

function OnotaionTestThree(n){
    // O(log n)
    const startTime = performance.now();
  
    console.log("O(log n) Function Start");
    for (var i = 2; i <= n; i = i * 2) {
      console.log(i);
    }
    console.log("O(log n) Function End");
  
    const endTime = performance.now();
    console.log(`Total time taken for O(log n) function: ${(endTime - startTime) / 1000} seconds`);
    
    return OnotaionTestThree;
  }
  
  OnotaionTestThree(10);
  
