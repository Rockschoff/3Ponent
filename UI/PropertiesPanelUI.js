import { TransformControlsUI } from "./libs/TransformsUI"
import { MaterialsUI } from "./libs/MaterialsUI"
import { PointLight } from "three"
function PropertiesPanelUI(editor){

    this.dom = document.createElement("div")
    
    this.dom.style.cssText = "height:100%;width:100%;background-color:lightblue"


    this.heading = document.createElement("div")
    this.heading.innerText="Scene"
    this.heading.id="panel-heading"
    this.dom.appendChild(this.heading)
    this.heading.style.cssText="width: 100%"

    this.transforms = {
        dom:document.createElement("div"),
        updateObjectTransforms : function(data){}
    }
    this.materials={
        dom:document.createElement("div"),
        updateObjectMaterial:function(data){}
    }
    this.dom.appendChild(this.transforms.dom)
    this.dom.appendChild(this.materials.dom)

    const positionTransforms = new TransformControlsUI("position" , editor)
    const rotationTransforms = new TransformControlsUI("rotation" , editor)
    const scaleTransforms = new TransformControlsUI("scale" , editor)
    const materialsPanel = new MaterialsUI(editor)
    this.transforms.dom.appendChild(positionTransforms.dom)
    this.transforms.dom.appendChild(rotationTransforms.dom)
    this.transforms.dom.appendChild(scaleTransforms.dom)
    this.materials.dom.append(materialsPanel.dom)

    


    



    this.transforms.updateObjectTransforms=function(data){
        // console.log(data)
        const {position , rotation , scale}=data
        positionTransforms.updateValues([position.x , position.y  , position.z])
        rotationTransforms.updateValues([rotation.x , rotation.y , rotation.z])
        scaleTransforms.updateValues([scale.x , scale.y , scale.z])
    }
    this.materials.updateObjectMaterial=function(newName){
        materialsPanel.updateObject(newName)
        
    }
    

    


}
export {PropertiesPanelUI}