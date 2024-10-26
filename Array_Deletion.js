let data = [10,20,30,40,50,60];
let place = 2; //30

for(let i=2; i<data.length;i++){
    data[i] = data[i+1];
}
data.pop(data.length-1);
console.log(data);