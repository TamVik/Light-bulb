function lightOn() {

    let bulb = document.getElementById("lightbulb") 
        if (bulb.src.match("lightbulb_off")) {
            bulb.src = "lightbulb_on.svg"
            document.body.style.backgroundColor = "#000814";
            document.getElementById("title").style.color = "#d5bdaf"
        }
        else  {
            bulb.src = "lightbulb_off.svg"
            document.body.style.backgroundColor = "#d5bdaf"
            document.getElementById("title").style.color = "#22223b"
        }
    }
