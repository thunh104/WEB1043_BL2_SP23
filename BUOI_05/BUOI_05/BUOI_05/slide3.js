// Khai báo hàm và gọi hàm
function sayHello(){
    let you = prompt("Nhập tên: ");
    alert(`Hello ${you}`);
}
sayHello();

// HÀM CÓ THAM SỐ TRUYỀN VÀO
// function cong(x,y){
//     let kq=x+y;
//     document.write(`${x}+${y}=${kq}<br>`);
// }
// cong(3,5);

// let a=7,b=9;
// cong(a,b);

//HÀM VỚI GIÁ TRỊ TRẢ VỀ
// function cong(x,y){
//     let kq=x+y;
//     return kq;
// }
// let bt=cong(3,5)+cong(1,2);
// alert(bt);

// CONFIRM
// function xacnhan(traloi){
//     var kq;
//     if(traloi){
//         alert("Tuyệt vời. Chúc bạn chiến thắng");
//     }
//     else{
//         alert("Hẹn gặp lại bạn lần sau");
//     }
// }
// traloi=confirm("Bạn có muốn chơi tiếp không?");
// xacnhan(traloi)

//PHẠM VI CỦA BIẾN
let y=10;
function xacnhan(){
    let x=20;
    console.log("Trong hàm");
    console.log(x);
    console.log(y);
}
xacnhan();
console.log("Ngoài hàm");
console.log(y);
console.log(x);