var year=parseInt(prompt("nhập năm vào đây "));
if(year%4==0){
    console.log("đây ko phải là năm nhuận ");
}else if(year%100==0){
    console.log("đây ko phải năm nhuận ");
}else{
    console.log("đây là năm nhuận ")
}
