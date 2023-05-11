
{/* <button class="follow border-0 mt-4 " onclick="btnclick()">Follow</button> */}


  // function btnclick(e){
  //   console.log("WRF")
  //   const followbtn = document.querySelectorAll('.follow');

  // for (let i = 0; i < followbtn.length; i++) {
  //   followbtn[i].addEventListener('click', function() {
  //     console.log("first")
  //     followbtn[i].style.backgroundColor = 'black';
  //   });
  // }
  // }

  function btnclick(button) {
    console.log("first")
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    button.style.width = '100px';
    button.textContent = 'following';


  }