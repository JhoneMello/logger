 var reset = document.getElementById("reset");


 reset.addEventListener("click", function(){

     var senha = document.getElementById("senha").value;
     var confirm = document.getElementById("confirm").value;
     

     if(senha === confirm){
         sessionStorage.setItem("password", senha)
         alert("Sua senha foi redefinida com sucesso.");
         window.location.href = "../pages/login.html";
         return;
         
    }


    
     alert("Certifique-se de que ambas as senhas digitadas são iguais.")

});

// sessionStorage.setItem("confirm", password);
