class TransformControlsUI{

    constructor(name , editor){
        this.dom= document.createElement("div")
        this.name = name
        this.editor = editor
        this.createTemplate()
    }

    createTemplate(){
        
        
        const heading = document.createElement("div")
        const values = document.createElement('div')
        values.style.display = "flex"
        heading.innerText=this.name
        var f = document.createElement("form")
        for(var i =0 ; i < 3; i++){
            var ip = document.createElement("input")
            ip.style.width = "30%"
            ip.value=0
            ip.class = "name"
            values.appendChild(ip)
        }
        this.dom.appendChild(heading)
        this.dom.appendChild(values)
    }

    updateValues(values){
        // console.log(values)
        for(var i =0;i<3;i++){
            
            this.dom.childNodes[1].childNodes[i].value=values[i]

        }
    }

    
    

}

export {TransformControlsUI}