function validaFormulario() {
   // alert("valida");
    
    var vName = document.getElementById("name").value;
    var vNickname = document.getElementById("nickname").value;
    var vDay = document.getElementById("day").value;
    var vMonth = document.getElementById("month").value;
    var vYear = document.getElementById("year").value;
    var vCpf = document.getElementById("cpf");
    var vTeam = document.getElementById("team_id").value;

    var sportList = document.getElementsByName("sport");
    var sportSelected = []


    if(sportList[0].checked) {
        sportSelected.push(sportList[0].id);
    }

    if(sportList[1].checked) {
        sportSelected.push(sportList[1].id);
    }

    if(sportList[2].checked) {
        sportSelected.push(sportList[2].id);
    }

    if(sportList[3].checked) {
        sportSelected.push(sportList[3].id);
    }

    if(sportList[4].checked) {
        sportSelected.push(sportList[4].id);
    }

    if(sportList[5].checked) {
        sportSelected.push(sportList[5].id);
    }

    if(sportList[6].checked) {
        sportSelected.push(sportList[6].id);
    }

    var vCadastro = false;

    if(vName.length>=10 && vName.length<=80){
        if(vNickname.length>=2 && vNickname.length<=20){
            if(vDay>=1 && vDay<=31){
                if(vMonth>=2 && vMonth<=12){
                    if(vYear>=1900 && vYear<=2021){
                        if(vTeam!=""){
                            if(vCpf.value.length==14 && vCpf.checkValidity()){
                                if(sportSelected.length>0){
                                    vCadastro = true;
                                } else {
                                    vCadastro = false; 
                                }   
                            } else {
                                vCadastro = false;
                            }                   
                        } else {
                            vCadastro = false;
                        }
                    }    
                } else {
                    vCadastro = false;
                }
            } else {
                vCadastro = false;
            }  
        } else {
            vCadastro = false;
        }    
    } else {
        vCadastro = false;
    } 

    var vResultado = document.getElementById("resultado");
    vResultado.innerHTML = vCadastro;
}
    
 
function geraJson() {
   // alert("gera");
    var formulario = {
        name: "",
        nickname: "",
        day: 0,
        month: 0,
        year: 0,
        cpf:"",
        team:"",
        sport: []
    }

    formulario.name = document.getElementById("name").value;
    formulario.nickname = document.getElementById("nickname").value;
    formulario.day = document.getElementById("day").value;
    formulario.month = document.getElementById("month").value;
    formulario.year = document.getElementById("year").value;
    formulario.cpf = document.getElementById("cpf").value;
    formulario.team = document.getElementById("team_id").value;

    var sportList = document.getElementsByName("sport");

    if(sportList[0].checked) {
        formulario.sport.push(sportList[0].id);
    }

    if(sportList[1].checked) {
        formulario.sport.push(sportList[1].id);
    }

    if(sportList[2].checked) {
        formulario.sport.push(sportList[2].id);
    }

    if(sportList[3].checked) {
        formulario.sport.push(sportList[3].id);
    }

    if(sportList[4].checked) {
        formulario.sport.push(sportList[4].id);
    }

    if(sportList[5].checked) {
        formulario.sport.push(sportList[5].id);
    }

    if(sportList[6].checked) {
        formulario.sport.push(sportList[6].id);
    }

    var vJson = JSON.stringify(formulario);
    var vCadastro = document.getElementById("resultado");
    vCadastro.innerHTML = vJson;
}
