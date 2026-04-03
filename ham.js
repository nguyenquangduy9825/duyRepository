function binhphuong(number){
    let ketqua=number*number;
    return ketqua;
}
function bamvao(){
    let nhap=document.getElementById("input").value
    let ketqua=binhphuong(nhap);
    document.getElementById("input").value=ketqua;
}