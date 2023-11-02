// ===========   Khai báo một đối tượng với các thuộc tính nhất định  ==============
// let sv={
//     masv:"PH40458",
//     name:"Hoài Thu",
//     diem:9,
//     quiz:function(){
//         return "Làm quiz";
//     }
// }


// ============  Truy cập đến thuộc tính của một đối tượng  ==================
// console.log(sv);
// console.log(sv['name']);
// console.log(sv.masv);
// sv.name="Trang";
// console.log(sv);
// console.log(sv.quiz());

// function sv(name, masv, diem){
//     this.name=name;
//     this.masv=masv;
//     this.diem=diem;
//     this.quiz=function(){
//         return "Làm quiz";
//     }
// }
// console.log(sv);


// ================= Khai báo biến sv1 là 1 Object thuộc lớp sv ====================
// let sv1 = new sv("Hà", "PH001", 7);
// let sv2 = new sv("Hoa", "PH002", 9);
// console.log(sv1);
// console.log(sv1.name);
// console.log(sv1.quiz());

// ============= Mảng các sinh viên ===========================\
// let arrObj=[];
// arrObj[0] = new sv("Thu", "PH001", 9);
// arrObj[1] = new sv("Hoa", "PH002", 8);
// arrObj[2] = new sv("Trang", "PH003", 10);
// arrObj[3] = new sv("Hoàng", "PH004", 9);
// arrObj[4] = new sv("Linh", "PH005", 7);
// arrObj[5] = new sv("Ngọc", "PH006", 8);
// console.log(arrObj);


// ============== Hiển thị tên của tất cả các sinh viên trong mảng =================
// console.log(arrObj[0].name);
// CÁCH 1
// for(let i=0; i<arrObj.length; i++){
//     console.log(arrObj[i].name);
// }
// for(let x in arrObj){
//     console.log(arrObj[x].name);
// }

// CÁCH 2
// for(let val of arrObj){
//     // console.log(val);
//     console.log(val.name);
// }
// arrObj.forEach(val =>{
//     console.log(val.name);
// })


// let sv={
//     name:"PH001",
//     subject:['HTML', 'Javascript', 'Java'],
// }
// console.log(sv.subject);

// console.dir(window);

alert(window.innerWidth);