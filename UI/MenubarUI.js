import { MenuElement } from "./libs/MenuElement"

function MenubarUI(editor){

    this.dom = document.createElement("div")
    this.dom.setAttribute("id" , "menubar-ui")
    this.dom.display = 'flex'

    const addOptions = ["Box" , "Capsule" , "Circle" , "Cone" , "Cylinder", "Dodecahedron" ]
    const addElement = new MenuElement("add" , addOptions ,  editor)

    this.dom.appendChild(addElement.dom)
    

    

}

export {MenubarUI}