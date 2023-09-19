class MenuElement{
    constructor(name ,options ,  editor){
        this.name = name
        this.editor = editor
        this.dom = document.createElement("div")
        this.options=options

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
        this.dom.onclick=this.HandleClick

        console.log(this.dom.style.height , this.dom.parentElement)
        
    }

    HandleClick(){
        console.log("clicked")
        const dropDown = document.createElement("div")

        dropDown.style.cssText="width:100px;position:relative;"
    }
}

export {MenuElement}