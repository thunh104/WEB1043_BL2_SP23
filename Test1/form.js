let p = document.getElementById("my-frm").elements;
function chonCLB(){
    if(p.clb.value == "1"){
        p.phiTG.value = 100000;
    }
    else if(p.clb.value == "2"){
        p.phiTG.value = 150000;
    }
    else if(p.clb.value == "3"){
        p.phiTG.value = 200000;
    }
    else if(p.clb.value == "4"){
        p.phiTG.value = 250000;
    }
    else {
        p.phiTG.value = "";
    }
}
function chonHT(){
    if(p.hinhThuc.value == 2){
        p.phiCSVC.value = 50000;
    }
    else {
        p.phiCSVC.value = 0;
    }
}
function tinhPhi(){
    p.tongPhi.value = Number(p.phiTG.value) + Number(p.phiCSVC.value);
}
function validate(){
    let flag = true;
    if(p.hoTen.value == ""){
        document.getElementById("hoTenError").innerHTML = "Vui lòng nhập vào họ và tên !";
        flag = false;
    }
    if(p.sdt.value == ""){
        document.getElementById("sdtError").innerHTML = "Vui lòng nhập vào số điện thoại của bạn !";
        flag = false;
    }
    let checkSDT = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if(p.sdt.value.match(checkSDT)){
        document.getElementById("sdtError").innerHTML = "Đã nhập đúng định dạng của số điện thoại !";
    }
    else {
        document.getElementById("sdtError").innerHTML = "Nhập sai định dạng của số điện thoại !";
    }
    if(p.email.value == ""){
        document.getElementById("emailError").innerHTML = "Vui lòng nhập vào email của bạn !";
        flag = false;
    }
    let checkMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(p.email.value.match(checkMail)){
        document.getElementById("emailError").innerHTML = "Đã nhập đúng định dạng email !";
    }
    else {
        document.getElementById("emailError").innerHTML = "Nhập sai định dạng email !";
    }
    if(p.user.value == ""){
        document.getElementById("userError").innerHTML = "Vui lòng nhập vào tên đăng nhập !";
        flag = false;
    }
    if(p.user.value.length < 8){
        document.getElementById("userError").innerHTML = "Vui lòng nhập tên đăng nhập đủ 8 kí tự !"
    }
    else {
        document.getElementById("userError").innerHTML = "Tên đăng nhập đủ 8 kí tự !";
    }
    if(p.pass.value == ""){
        document.getElementById("passError").innerHTML = "Vui lòng nhập vào password !";
        flag = false;
    }
    if(p.repass.value == ""){
        document.getElementById("repassError").innerHTML = "Vui lòng nhập lại password của bạn !";
        flag = false;
    }
    if(p.repass.value !== p.pass.value){
        document.getElementById("repassError").innerHTML = "Mật khẩu nhập lại không khớp !";
    }
    else {
        document.getElementById("repassError").innerHTML = "Mật khẩu nhập lại đã khớp !";
    }
    if(flag == true){
        tinhPhi();
    }
return false;
}

if(yourage == 16){
    alert("It's your birthday !");
}