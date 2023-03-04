function changeColor () {

            var color1 = "black";
            var color2 = "red";
            var color3 = "white";
            var color4 = "grey";
            var color5 = "blue";

            var randno = Math.floor(Math.random()*5) + 1;
            //  alert("color"+randno);
            // console.log("color"+randno)

            document.body.style.backgroundColor = eval("color" + randno)
          }
