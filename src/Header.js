import './style.css'

function header() {
    let headerInner = document.createElement("div")
    headerInner.classList.add("headerInner")
    let Logo = document.createElement("div")
    Logo.classList.add("Logo")
    let LogoName = document.createElement("div")
    LogoName.classList.add("LogoName")
    LogoName.textContent = "TODO"

    let leftHeader = document.createElement("div") 
    leftHeader.classList.add("leftHeader")
    leftHeader.appendChild(Logo)
    leftHeader.appendChild(LogoName)
    let facebook = document.createElement("div")
    facebook.classList.add("icons")
    let signUp = document.createElement("div")
    signUp.classList.add("icons")
    signUp.classList.add("signUp")


    let like = document.createElement("div")
    like.classList.add("icons")
    like.classList.add("like")

    let share = document.createElement("button")
    share.classList.add("shareButton")
    share.textContent = "Share"

    let rightHeader = document.createElement("div")
    rightHeader.classList.add("rightHeader")
    
    rightHeader.appendChild(share)
    rightHeader.appendChild(like)
    rightHeader.appendChild(signUp)
    rightHeader.appendChild(facebook)
    
    headerInner.appendChild(leftHeader)
    headerInner.appendChild(rightHeader)
    return headerInner
}

export{header}