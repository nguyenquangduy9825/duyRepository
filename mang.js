let a=[1,2,3,4,4];
a.reverse();
console.log(a);
a.trim();
console.log(a);
let b=new Array(Array.length);
console.log(b);
console.log(a);
a[0]=100;
console.log(a);
// duyệt mảng bằng for

for(let i=0;i<a.length;i++){
    console.log(a[i]);
}
// duyệt mảng bằng foreach 
a.forEach(function(so){
    console.log(so)

});
let n=[1,2,3,4,5];
// tính tổng các phần tử trong mảng
let sum=0;
n.forEach(function(element){
    sum+=element;
// nếu xuất trong hàm chỉ xuất được từng phần tử riêng biệt
});
// xuất ở ngoài hàm sẽ xuất hiện được tổng của các phần tử trong mảng 
console.log(sum);
// chuỗi bài tập 
let array=["xin chào tôi là duy "]
console.log(array.length);
// khai báo 1 chuỗi mới 
let array1=new Array("cin chào tôi là hùng ");
// trả về độ dài của mảng 
console.log(array1.length);
// trả về tạo giá trị index
console.log(array1[1]);
// dùng push thêm vào cuối mảng , làm thay đổi mảng gốc 
array1.push();
console.log(array1);
// dùng unshift thêm vào đầu mảng làm thay đổi mảng gốc 
array1.unshift("tuấn ");
console.log(array1);
// pop() xóa phần tử ở cuối mảng
array1.pop();
// shift() xóa phần tử ở đầu bảng 
array1.shift();
console.log(array1);
// phương thức sort() a-b<0,a-b>0,a-b=0
let arrar3=[3,4,5,6];
array3.sort((a,b)=>a-b);
console.log(array3);// đây là tăng dần nếu giảm dần thì ngược lại
//reverse làm đảo ngược mảng 
//Viết một chương trình JavaScript để tìm một giá tri được nhập vào từ hộp thoại có nằm trong mảng hay không. Nếu có in ra vị trí của phần tử đó. Trong trường hợp không tìm thấy thông báo không tìm thấy phần tử.
let search=prompt("mời nhập vào 1 số");
let number=[1,2,3,4,5];
for(let i=0;i<number.length;i++){
    if(search===number[i]){
       index=i;


    }
}
if(index>-1){
    arlert('số ${search} nằm ở vị trí ${index} trong mảng ')
}
else{
    alert("không tìm thấy số trong mảng")
}
//Viết một chương trình JavaScript để tìm giá trị lớn nhất trong mảng cho trước.
let numbers = [-3, 5, 1, 3, 2, 10];
let max = numbers[0];
let index = 0;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
        index = i;
    }
}
alert("max: " + max + " at position " + index);

     