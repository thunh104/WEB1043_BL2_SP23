var arr = ['Rock', 'Paper', 'Scissors'];
s = Math.floor(Math.random()*3);
//alert(s);
let may = arr[s];
//alert(may);
function getValue(key){
    let you = arr[key];
    //alert(you);
    if(may==you){
        alert("Hòa");
    }
    else{
        switch(you){
            case "Rock":
                if(may=="Paper"){
                    alert(`Bạn:${you} May:${may} thua rồi`);
                }
                else{
                    alert(`Bạn:${you} May: ${may}Chúc mừng, bạn đã chiến thắng`);
                }
                break;
            case "Paper":
                if(may=="Scissors"){
                    alert(`Bạn:${you} May: ${may}Bạn thua rồi`);
                }
                else{
                    alert(`Bạn:${you} May: ${may} Chúc mừng, bạn đã thắng`);
                    
                }
                break;
            case "Scissors":
                if(may=="Rock"){
                    alert(`Bạn:${you} May: ${may}Bạn thua rồi`);
                }
                else{
                    alert(`Bạn:${you} May: ${may} Chúc mừng, bạn đã thắng`);
                }
                break;
        }
    }
}