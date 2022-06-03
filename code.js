const inputFileButton = document.getElementById("inputfilebutton");
inputFileButton.addEventListener("click", clickFileButton);

const inputNumberButton = document.getElementById("inputnumberbutton");
inputNumberButton.addEventListener("click", clickNumberButton);



function clickFileButton(){
    arquivo = document.getElementById("inputfile");

    var fr=new FileReader();

    try{
        fr.readAsText(arquivo.files[0]);
        fr.onload=function(){
            info = fr.result; 
            document.getElementById('output').textContent=fr.result;
        } 
    }
    catch(erro){
        console.log(erro);
        alert(erro)
    }
    finally{
        alert("Obrigado pela visita");
    }
}
function clickNumberButton(){
      
    number = document.getElementById("inputnumber").value
  
    try{
        if (number == '') throw 'Informe um valor';
    }
    catch(erro){
        document.getElementById("outputnumber").innerHTML = erro;
    }
  
  
  
  
  
    console.log("Number");


}

