import { MenuElement } from "./libs/MenuElement"

function MenubarUI(editor){

    this.dom = document.createElement("div")
    this.dom.setAttribute("id" , "menubar-ui")
    this.dom.display = 'flex'

    const addOptions = ["Box" ,"Sphere", "Capsule" , "Circle" , "Cone" , "Cylinder", "Dodeca.H" ]
    const addElement = new MenuElement("add" , addOptions ,  editor)
    for(var i =0 ; i < addOptions.length;i++){
        addElement.AddItem("add" , addOptions[i])
    }


    this.dom.appendChild(addElement.dom)
    

    

}

export {MenubarUI}