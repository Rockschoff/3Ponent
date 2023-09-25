
class MaterialsUI{
    constructor(editor){
        this.editor = editor
        this.dom=document.createElement("div")
        this.name = ""
        if (this.editor.currentObject){
            this.name = this.editor.currentObject.material.type
        }
        this.createTemplate()
        

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

        const materailList = document.createElement("div")
        const matlist=""
       
        this.materialSelector.appendChild(name)



    }

    updateObject(){
        if (this.editor.currentObject){
            this.name = this.editor.currentObject.material.type
            this.materialSelector.childNodes[0].innerText=this.name
        }
        
    }

}
export {MaterialsUI}