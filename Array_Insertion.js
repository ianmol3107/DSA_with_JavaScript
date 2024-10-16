let data = [10,50,4,12,5,45];
let num = 45;
let e1 = 2;
let i;
for(i=data.length-1; i>=e1; i--){
    data[i+1] = data[i]
}
data[i+1] = num;

console.log(data)