const fs = require('fs');
fs.readFile('blocking_non_blocking.md', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});


console.log("작업 종료");