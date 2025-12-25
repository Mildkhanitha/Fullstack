const kvarray = [
    {key: 1,value: 10},
    {key: 2,value: 20}
];
const reformatted = kvarray.map(
    ({key ,value}) => ({[key] : value})
)
console.log(reformatted)