const fs = require('fs');
const data = fs.readFileSync('blocking_non_blocking.md');

console.log(data.toString());
console.log('작업 종료');