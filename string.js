console.log("xin chaof duy");
console.log("xin chaof duy");
// khởi tạo chuỗi
let a="xin chào tôi là duy";
console.log(a);
// index chuỗi 
let duy="nguyễn quang duy";
console.log(duy[6]);
// độ dài của chuỗi 
let s3="xin chào tooi là duy";
console.log(s3.length);
// bài tập chuỗi 
let b=prompt("mời nhập vào 1 huỗi ");
if(b.length<=150){
    alert(`bạn đã nhập ${b.length} kí tự `);
}
else{
    alert(`bạn đã nhập quá kí tự ${b.length-150} kí tự `)
}
// tiếp tục với chuỗi trim() trim end trímtart
// strim() loại bỏ tất cả khoảng trắng ở đầu và cuối 
// trim end()loại bỏ các khoảng trắng đằng sau 
// trim start() loại bỏ các khoảng trắng ở đầu 
// slice cắt chuỗi 
let s4="123456";
//cắt chuỗi 
let s5=s4.slice(0,3);
//nếu end index nếu ko nhập là ngầm cắt xuống cuối chuỗi 
console.log(s5);
console.log(s4);
// vẫn giữ nguyên chuỗi ban đầu 
// cắt chuỗi dùng substring giống nhau nhưng khi start >end thì sẽ tự động đảo ngược 
let s6=s4.substring(3,0);
//sẽ tự động đảo ngược 
console.log(s6);
let s9="xin chào tôi là duy";
let s10="xin chào";
let s11="tôi là hùng "
let s12=s9.concat(s10,s11);
console.log(s12);
// bài tập gộp chuỗi 
let s13="xin chào tôi tên là hùng ";
let s14=s13.toUpperCase();
console.log(s14);
let s19="xin chào tôi tên là đạt ";
let s20=s19.charAt(4);
    console.log(s20);
    // bài tập về replace()
    let titile="đây là đôi giày nam đẹp nhất đôi giày nam năm 2025"
    let newtitile=titile.replace("nam","nữ");
    // còn 1 cách khác thay thế toàn bộ chữ nam trong chuỗi
    let ttile=titile.replace(/nam/g,"nữ");
    console.log(newtitile);
    console.log(tttile);
    // repeat là số lần lặp lại của chuỗi 
    let s16="chúng tôi xin chào";
    let s17=s16.repeat(3);
    console.log(s17);
    // indexof tìm kiếm lần đầu tiên xuất hiện trong chuỗi ; và có thể tìm bắt đầu từ đâu 
    let s22="xin chào xin chào ";
    let s23=s22.indexOf("c" ,8);
    console.log(s23);
    // lastindexof tìm kiếm lần cuối cùng xuất hiện trong chuỗi 
    let path = "projects/backend/java/controller.java";

// Tìm vị trí dấu gạch chéo (/) cuối cùng
let lastSlash = path.lastIndexOf("/",9);// endindex là đến tới 9 cuối cùng index nó là bao nhiêu

console.log(lastSlash); // 
//include có tìm thấy chuỗi con hay ko


