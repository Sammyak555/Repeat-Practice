let formtag = document.querySelector('form').addEventListener('submit', myfn)

let products = JSON.parse(localStorage.getItem('products')) || []

function myfn(e) {
    e.preventDefault();

    let type = document.getElementById('type').value
    let year = document.getElementById('year').value
    let desc = document.getElementById('desc').value
    let price = document.getElementById('price').value

    let prodobj = {
        id: Math.random() * 100,
        type: type,
        year: year,
        desc: desc,
        price: price
    }
    products.push(prodobj)
    localStorage.setItem('products', JSON.stringify(products))

    // fetch('https://json-server-vercel-six-neon.vercel.app/furniture', {
    //     method: 'POST',
    //     body: JSON.stringify(prodobj),
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },

    // })
    //     .then((response) => response.json())
    //     .then((prodobj) => {
    //         console.log('Success:', prodobj);
    //     })
    //     .catch((error) => {
    //         console.log('Error:', error);
    //     });
    otpmodal()
}

function otpmodal(){
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    }

    let otp = document.getElementById('otp').value
    

    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}



