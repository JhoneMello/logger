 var reset = document.getElementById("reset");


 reset.addEventListener("click", function(){

     var senha = document.getElementById("senha").value;
     var confirm = document.getElementById("confirm").value;
     

     if(senha != confirm){
         alert("Certifique-se de que ambas as senhas digitadas são iguais.");
         return;
         
    }

    sessionStorage.setItem("password", senha)
         alert("Sua senha foi redefinida com sucesso.");
         window.location.href = "../pages/login.html";


});


var show = document.getElementById("show");

show.addEventListener("change", function(){

    var senha = document.getElementById("senha");

    var type = senha.getAttribute("type");

    var confirm = document.getElementById("confirm");

    var type = confirm.getAttribute("type");

    if(type === "password"){
      senha.setAttribute("type", "text"); 
    } else {
       senha.setAttribute("type", "password"); 
    }

    if(type === "password"){
      confirm.setAttribute("type", "text"); 
    } else {
       confirm.setAttribute("type", "password"); 
    }

});

    
     


