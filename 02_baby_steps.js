function add(x,y) { return x+y };
console.log(process.argv.slice(2).map(Number).reduce(add));

