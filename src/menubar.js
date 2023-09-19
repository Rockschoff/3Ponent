import { MenubarUI } from "../UI/MenubarUI"
function Menubar(editor){

    console.log("setting up the menubar")



    const menubarDiv = document.getElementById("menubar")
    menubarDiv.style.position="absolute"
    menubarDiv.style.top= "0px"
    menubarDiv.style.left="0px"
    menubarDiv.style.width="70%"
    menubarDiv.style.height="4vh"
    menubarDiv.style.backgroundColor="lavender"

    menubarUI = new MenubarUI(editor)
    menubarDiv.appendChild(menubarUI.dom)
    

}

export {Menubar}