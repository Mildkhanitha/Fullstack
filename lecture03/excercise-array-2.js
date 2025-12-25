let values1 = ['Apple',1,false];
let values2 = ['Fries',2,true,'Apple'];
let values3 = ['Mars',9,'Apple'];
let commonValues = [];

for (let i = 0; i < values1.length; i++) {
    for (let j = 0; j < values2.length; j++ ){
        for (let k = 0; k < values3.length; k++){
            if (values1[i] === values2[j] && values1[i] == values3[k]){
                commonValues.push(values1[i])
                console.log(commonValues)
            }
        }
    }
}
