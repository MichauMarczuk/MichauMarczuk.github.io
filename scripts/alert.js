const openModalButton = document.getElementById("material-info");
    const modal = document.getElementById("myModal");
    const closemodal = document.getElementById("closeModal");
    const closemsg = document.getElementById("closemsg");
    const overlay = document.querySelector(".overlay");
    const SendMessage = document.getElementById("sendmsg");
    const confirmation = document.getElementById("msgSent");


    openModalButton.addEventListener("click", function() {
      modal.classList.add("visible");
      overlay.style.display = "block";
      
    });

    function closeModal() {
      modal.classList.remove("visible");
      confirmation.classList.remove("visible");
      overlay.style.display = "none";
    }

    overlay.addEventListener("click", closeModal);
    closemodal.addEventListener("click", closeModal);
    closemsg.addEventListener("click", closeModal);
    
    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
        closeModal();
      }
    });

    
    SendMessage.addEventListener("click", function() {
        const text = document.getElementById("message").value;
        const mail = document.getElementById("email").value;
        if(text != '' || mail != ''){
            confirmation.classList.add("visible");
            overlay.style.display = "block";
        } else {
            document.getElementById("msgerror").textContent = "Wypełnij wszystkie pola!";
        }
      });