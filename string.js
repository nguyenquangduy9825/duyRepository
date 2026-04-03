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

console.log(lastSlash);  
//include có tìm thấy chuỗi con hay ko
//startsWith() kiểm tra phần đầu Phương thức này dùng để kiểm tra xem một chuỗi có bắt đầu bằng các ký tự bạn chỉ định hay không. Nó trả về true hoặc false.
let url = "https://duy-store.com";

console.log(url.startsWith("https")); // true
console.log(url.startsWith("http"));  // true
console.log(url.startsWith("www"));   // false
//Ngược lại với startsWith, cái này dùng để kiểm tra xem chuỗi có kết thúc bằng ký tự nào đó không.
let fileName = "bai-tap-lon.pdf";

if (fileName.endsWith(".pdf")) {
    console.log("Đây là file tài liệu PDF");
} else {
    console.log("Định dạng file không hợp lệ");
}
//Đây là phương thức "quyền lực" nhất trong ba cái này. Nó dùng để chia một chuỗi thành một danh sách (mảng) dựa trên một ký tự ngăn cách (separator).
let fullName = "Nguyễn Quang Duy";

// Tách nhau bởi dấu cách
let words = fullName.split(" "); 

console.log(words); // Kết quả: ["Nguyễn", "Quang", "Duy"]
console.log("Họ của bạn là: " + words[0]); // Nguyễn
console.log("Tên của bạn là: " + words[2]); // Duy
// bài tập
let str = "025468";

let result = "";

for (let i = 0; i < str.length; i++) {
    result += str[i];

    // nếu số hiện tại và số sau đều chẵn thì chèn "-"
    if (str[i] % 2 === 0 && str[i+1] % 2 === 0) {
        result += "-";
    }
}

console.log(result); // 0-254-6-8

