const size = parseInt(process.argv[2], 10);
if (isNaN(size) || size <= 0) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      row += "x";
    }
    console.log(row);
  }
}
