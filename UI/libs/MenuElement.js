class MenuElement{
    constructor(name ,options ,  editor){
        this.name = name
        this.editor = editor
        this.dom = document.createElement("div")
        this.options={}
        for(var i =0 ; i < options.length ; i++){
            this.options[options[i]]=null
        }
        this.dropDown=null
        this.isActive=false

        this.createElement()
    }

    createElement(){

        this.dom.innerHTML=`<div>${this.name}</div>`
        this.dom.style.width = `50px`
        this.dom.style.maxWidth = "70px"
        this.dom.style.height = '4vh'
        this.dom.style.backgroundColor="pink"
        this.dom.style.textAlign="center"
        this.dom.style.lineHeight="4vh"
        

        this.createDropDown()
        const instance= this
        
        this.dom.childNodes[0].onclick= function(event){instance.HandleDropdown(instance)}
        
    }

    createDropDown(){
        // console.log("creating the dropdown")
        const dropdown = document.createElement("div")
        this.dom.appendChild(dropdown)
        this.dropDown=dropdown
        this.dropDown.style.display="none"

    }

    HandleDropdown(instance){
        // console.log("here")
        if(this.isActive){
            instance.dropDown.style.display="none"
            instance.isActive=false
            
        }else{
            instance.dropDown.style.display="block"
            instance.isActive=true
        }
    }
    CloseDropdown(instance){
        // console.log("closing")
        instance.dropDown.style.display="none"
        instance.isActive=false
    }

    AddItem(type , name){
        if (type==="add"){
            const item = document.createElement("div")
            item.innerText=name
            const instance = this
            item.onclick=function(event){
                console.log("adding the ", name)
                instance.editor.signals.addObject.dispatch(null , instance.editor , name)
                instance.CloseDropdown(instance)
            }
            this.dropDown.appendChild(item)
            item.style.backgroundColor="purple"
            item.style.width="100px"
        }
    }
}

export {MenuElement}