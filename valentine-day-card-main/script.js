$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});


$(document).ready(function () {
  $("#yesBtn").click(function () {
      showWaitingMessage(); 
      createHearts("heartz");
      setTimeout(() => {
          window.location.href = "yes.html"; 
      }, 2000);
  });

  $("#noBtn").click(function () {
      showWaitingMessage();
      createBrokenHearts("broken-heartz"); 
      setTimeout(() => {
          window.location.href = "no.html"; 
      }, 2000);
  });

  function createHearts(type) {
      for (let i = 0; i < 30; i++) {
          setTimeout(() => {
              let heart = document.createElement("div");
              heart.className = type;
              heart.innerHTML = "❤️"; 
              heart.style.left = `${Math.random() * 100}vw`;
              heart.style.animationDuration = `${Math.random() * 2 + 1}s`;
              document.body.appendChild(heart);

              setTimeout(() => {
                  heart.remove();
              }, 2000);
          }, i * 50);
      }
  }

  function createBrokenHearts() {
      for (let i = 0; i < 50; i++) {
          setTimeout(() => {
              let heart = document.createElement("div");
              heart.className = "broken-heartz";
              heart.innerHTML = "💔"; 
              heart.style.left = `${Math.random() * 100}vw`;
              heart.style.top = `${Math.random() * 100}vh`;
              heart.style.animationDuration = `${Math.random() * 2 + 1}s`;
              document.body.appendChild(heart);

              setTimeout(() => {
                  heart.remove();
              }, 2000);
          }, i * 30);
      }
  }

  function showWaitingMessage() {
      $(".buttons").hide(); 
      let waitingMsg = $();
      $("body").append(waitingMsg);
  }
});
