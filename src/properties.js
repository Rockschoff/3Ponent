import * as THREE from "three"
import "./styles.css"

function PropertiesPanel(editor){


    

    console.log(editor)
    var state = "False"
    const tab = document.createElement("div")
    tab.innerText = "Scene"
    
    

    document.getElementById("properties").appendChild(tab)
    
    this.updateObject = function(newName){

        tab.innerHTML=newName

    }

}

export {PropertiesPanel}