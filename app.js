function postData(url = '', data = {}) {
    // Значения по умолчанию обозначены знаком *
      return fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
              'Content-Type': 'application/json',
              // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrer: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
      })
      .then(response => response.json()); // парсит JSON ответ в Javascript объект
  }
if(window.localStorage.getItem("Author Name")){
    document.getElementById("app").removeChild(document.getElementById("autofication"))
    var p = document.createElement("p")
    p.innerText = "Type message"
    document.getElementById("app").appendChild(p)
    var input = document.createElement("input")
    input.id = "message"
    document.getElementById("app").appendChild(input)
    var button = document.createElement("button")
    button.style.marginLeft = "10px"
    button.innerText = "Post"  
    document.getElementById("app").appendChild(button)
    var button2 = document.createElement("button")
    button2.style.marginLeft = "10px"
    button2.innerText = "Get last 10messages"  
    button2.onclick = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/comments").then(response => response.json()).then(myJSON => {
if(myJSON.length <= 10){
    for(var i = 0 ; i < myJSON.length; i++){
        var p = document.createElement("p")
        var name = myJSON[i].author
        var message =  myJSON[i].message
        p.innerText = `Auhtor: ${name}, Message: ${message}`
        document.getElementById("app").appendChild(p)
    }
}else {
    for(var i = myJSON.length - 11; i < myJSON.length; i++){
        var p = document.createElement("p")
        var name = myJSON[i].author
        var message =  myJSON[i].message
        p.innerText = `Auhtor: ${name}, Message: ${message}`
        document.getElementById("app").appendChild(p)
    }
}

        }
        )
    }
    document.getElementById("app").appendChild(button2)
    button.onclick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    postData("http://localhost:3000/comments", userMessage())
}
}

if(!window.localStorage.getItem("Author Name")){
var submitName = document.getElementById("submitName")
submitName.onclick = (e) => {
    e.preventDefault()
    localStorage.setItem("Author Name",document.getElementById("name").value)
    document.getElementById("app").removeChild(document.getElementById("autofication"))
    var p = document.createElement("p")
    p.innerText = "Type message"
    document.getElementById("app").appendChild(p)
    var input = document.createElement("input")
    input.id = "message"
    document.getElementById("app").appendChild(input)
    var button = document.createElement("button")
    button.style.marginLeft = "10px"
    button.innerText = "Post"  
    document.getElementById("app").appendChild(button)
    var button2 = document.createElement("button")
    button2.style.marginLeft = "10px"
    button2.innerText = "Get last 10messages"  
    button2.onclick = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/comments").then(response => response.json()).then(myJSON => {
if(myJSON.length <= 10){
    for(var i = 0 ; i < myJSON.length; i++){
        var p = document.createElement("p")
        p.innerText = 'Auhtor: `${windwo.localStorage.getItem("Author Name")`'
    }
}

        }
        )
    }
    document.getElementById("app").appendChild(button2)
    button.onclick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    postData("http://localhost:3000/comments", userMessage())
}
}
}
function userMessage(){
    var data = {}
    data["author"] = localStorage.getItem("Author Name")
    data["time"] = Date.now()
    data["message"] = document.getElementById("message").value
    return data 
}


