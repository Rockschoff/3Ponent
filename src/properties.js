import * as THREE from "three"
import "./styles.css"
import { PropertiesPanelUI } from "../UI/PropertiesPanelUI"

function PropertiesPanel(editor){

    panelUI = new PropertiesPanelUI(editor)
    

    
    // tab.style.cssText+="position:absolute;top:0px;bottom:0px;color:red;"
    
    
    const propertiesDiv = document.getElementById("properties")
    propertiesDiv.appendChild(panelUI.dom)
    propertiesDiv.style.backgroundColor="white"
    propertiesDiv.style.position = "absolute"
    propertiesDiv.style.top="0px"
    propertiesDiv.style.right="0px"
    propertiesDiv.style.width="30%"
    propertiesDiv.style.height="100%"
    
    this.updateObjectPanel = function(newName){

        panelUI.heading.innerText = newName

    }

    this.updateObjectTransforms = function(data){
        
        panelUI.transforms.updateObjectTransforms(data)
    }

}

export {PropertiesPanel}