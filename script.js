const arr = [
    {"name":"chevy", "count": 2},
    {"name":"ford", "count": 5},
    {"name":"acura", "count": 3},
    {"name":"honda", "count": 16},
];

const filterFunc = (value) => {return value.name === "ford"};

const newArr = arr.filter(filterFunc);

console.log("Filter results:",newArr);
