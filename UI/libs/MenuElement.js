class MenuElement{
    constructor(name ,options ,  editor){
        this.name = name
        this.editor = editor
        this.dom = document.createElement("div")
        this.options={}
        for(var i =0 ; i < options.length ; i++){
            this.options[options[i]]=null
        }
        this.dropDown=false

        this.createElement()
    }

    createElement(){

        this.dom.innerText=this.name
        this.dom.style.width = `50px`
        this.dom.style.maxWidth = "70px"
        this.dom.style.height = '4vh'
        this.dom.style.backgroundColor="pink"
        this.dom.style.textAlign="center"
        this.dom.style.lineHeight="4vh"
        this.dom.onclick=this.HandleDropdown

        this.createDropDown()
        
    }

    createDropDown(){
        console.log("creating the dropdown")
    }

    HandleDropdown(){
        console.log("dropdown")
    }
}

export {MenuElement}