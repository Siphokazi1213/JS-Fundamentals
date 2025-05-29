const firstArg = process.argv[2];
const convertedInteger = parseInt(firstArg, 10);
if (isNaN(convertedInteger)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${convertedInteger}`);
}
