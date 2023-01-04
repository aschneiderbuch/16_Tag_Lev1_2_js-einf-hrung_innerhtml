document.getElementById("info").innerHTML =" <h1> Hello World</h1>"

let letH2 = document.getElementById("info").innerHTML += "<h2> How are you?</h2>"
console.log(letH2)

let letContainer = document.getElementById("container").innerHTML = "<p>start of the element</p>"
console.log(letContainer)

let letDocumentWrite = document.write("end of the element")
console.log(letDocumentWrite)


let letHtmlMyP = document.getElementById("myP").innerHTML
console.log(letHtmlMyP)

document.getElementById("myP").innerHTML += " _____     test     " + letHtmlMyP

function myFunction() {
    let letElement = document.getElementById("idLink")
    letElement.innerHTML = "W3Schools"
    letElement.href = "http://www.w3schools.com"
}


/* ***************** Ende */