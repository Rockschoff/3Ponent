import { MeshBasicMaterial } from "three"
import materialList from "./materialList"
class MaterialsUI{
    constructor(editor){
        this.editor = editor
        this.dom=document.createElement("div")
        this.name = ""
        if (this.editor.currentObject){
            this.name = this.editor.currentObject.material.type
        }
        this.createTemplate()
        this.openOptions=false

    }
    createTemplate(){
        this.heading = document.createElement("div")
        this.heading.innerHTML="<p>Materials</p>"
        this.dom.appendChild(this.heading)
        this.materialSelector=document.createElement("div")
        this.materialPoperties=document.createElement("div")
        this.saveMaterial=document.createElement("div")
        this.dom.appendChild(this.materialSelector)
        const name = document.createElement("p")
        name.innerText=this.name
        name.style.backgroundColor="lavender"
        name.onmouseenter=function(event){
            name.style.backgroundColor="lavenderblush"
        }
        name.onmouseleave=function(event){
            name.style.backgroundColor="lavender"
        }
        
        //defining the material selector
        const instance=this
        const materialOptions = document.createElement("div")
        const optionsList = document.createElement("ul")
        function setMaterial(event){
            name.innerText=event.target.innerText
            instance.name=event.target.innerText
            instance.editor.signals.setMaterial.dispatch(event.target.innerText , instance.editor)
        }
        for(var i=0;i < materialList.length ; i++){
            const element = document.createElement("li")
            element.innerText=materialList[i]
            element.onclick=setMaterial
            // console.log(materialList[i])
            optionsList.appendChild(element)
        }
        materialOptions.appendChild(optionsList)
        materialOptions.style.transition="500ms"
        materialOptions.style.height="0px"
        materialOptions.style.overflow="hidden"
        optionsList.style.listStyle="none"
        
        name.onclick=function(event){
            if(instance.openOptions){
                materialOptions.style.height="0px"
                instance.openOptions=false
            }else{
                instance.openOptions=true
                materialOptions.style.height="auto"
            }
            
        }





        
       
        this.materialSelector.appendChild(name)
        this.materialSelector.appendChild(materialOptions)



    }

    updateObject(){
        if (this.editor.currentObject){
            this.name = this.editor.currentObject.material.type
            this.materialSelector.childNodes[0].innerText=this.name
        }
        
    }

}
export {MaterialsUI}