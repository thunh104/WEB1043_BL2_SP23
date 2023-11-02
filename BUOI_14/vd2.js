let p = document.getElementById("my-frm").elements;
function validate(){
    let flag = true;
    if(p.user.value == ""){
        document.getElementById("userError").innerHTML = "Bạn cần nhập tên người dùng";
        flag = false;
    }
    if(p.pass.value == ""){
        document.getElementById("passError").innerHTML = "Bạn cần nhập password";
        flag = false;
    }
    if(p.repass.value == ""){
        document.getElementById("rePassError").innerHTML = "Bạn cần nhập lại password";
        flag = false;
    }
    if(p.repass.value != p.pass.value){
        alert("Không khớp mật khẩu, vui lòng nhập lại !");
    }
    else{
        alert("Nhập lại đúng mật khẩu !");
    }
    if(p.eMail.value == ""){
        document.getElementById("emailError").innerHTML = "Bạn cần nhập vào email";
        flag = false;
    }
    let checkMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(p.eMail.value.match(checkMail)){
        alert("Bạn đã nhập đúng định dạng email");
    }
    else{
        alert("Vui lòng nhập lại đúng định dạng email");
    }
return false;
}
function chonMon(){
    if(p.mon.value == "1"){
        p.soLuong.value = 30;
    }
    else if(p.mon.value == "2"){
        p.soLuong.value = 20;
    }
    else if(p.mon.value == "3"){
        p.soLuong.value = 15;
    }
    else{
        p.soLuong.value = "";
    }
}