let p = document.getElementById("my_frm").elements;
function chonkh(){
    if(p.kh.value == "1"){
        p.hp.value = 1000000;
    }
    else if(p.kh.value == "2"){
        p.hp.value = 2500000;
    }
    else if(p.kh.value == "3"){
        p.hp.value = 3000000;
    }
    else {
        p.hp.value = "";
    }
}
function chonht(){
    if(p.ht.value == 1){
        p.pcsvc.value = 100;
    }
    else {
        p.pcsvc.value = 0;
    }
}
function tinhtien(){
    p.tt.value = Number(p.hp.value) + Number(p.pcsvc.value);
}
function validate(){
    let flag = true;
    if(p.hoten.value == ""){
        document.getElementById("hotenError").innerHTML = "Bạn cần nhập vào họ tên";
        flag = false;
    }
    let checkSDT = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if(p.sdt.value.match(checkSDT)){
        document.getElementById("sdtError").innerHTML = "Đúng định dạng số điện thoại";
    }
    else {
        document.getElementById("sdtError").innerHTML = "Sai định dạng số điện thoại";
    }
    if(p.email.value == ""){
        document.getElementById("emailError").innerHTML = "Bạn cần nhập vào email";
        flag = false;
    }
    let checkMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(p.email.value.match(checkMail)){
        document.getElementById("emailError").innerHTML = "Đúng định dạng mail";
    }
    else {
        document.getElementById("emailError").innerHTML = "Nhập sai định dạng email";
    }
    if(p.pass.value == ""){
        document.getElementById("passError").innerHTML = "Bạn cần nhập vào password";
        flag = false;
    }
    if(p.repass.value == ""){
        document.getElementById("repassError").innerHTML = "Bạn cần nhập lại password";
        flag = false;
    }
    if(p.repass.value == p.pass.value){
        document.getElementById("repassError").innerHTML = "Nhập lại đúng password";
    }
    else {
        document.getElementById("repassError").innerHTML = "Password nhập lại không khớp";
    }
    if(p.user.value.length < 8){
        document.getElementById("userError").innerHTML = "User phải lớn hơn hoặc bằng 8 ký tự";
        flag = false;
    } else {
        document.getElementById("userError").innerHTML = "";
    }
    if(flag == true){
        tinhtien();
    }
return false;
}