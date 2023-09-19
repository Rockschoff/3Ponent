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
        var HandleChange= this.HandleChange
        var editor = this.editor
        for(var i =0 ; i < 3; i++){
            var ip = document.createElement("input")
            ip.style.width = "30%"
            ip.style.maxWidth = "50px"
            ip.value=0
            ip.addEventListener("change", function(e){
                console.log("changed" )
                HandleChange(heading.innerText , values , editor)
                
                
            })
            ip.class = "name"
            values.appendChild(ip)
        }
        this.dom.appendChild(heading)
        this.dom.appendChild(values)
        values.style.justifyContent="center"
        values.style.gap="3px"
        heading.style.display="flex";
        heading.style.justifyContent="center"
    }

    updateValues(values){
        // console.log(values)
        for(var i =0;i<3;i++){
            
            this.dom.childNodes[1].childNodes[i].value=values[i]

        }
    }

    HandleChange(name, valuesDOM , editor){
        console.log(valuesDOM , editor)
        var vals = []
        for(var i =0;i<3;i++){
            
            vals.push(valuesDOM.childNodes[i].value)

        }
        editor.signals.updateObjectProperty.dispatch(name , vals , editor)

    }



    
    

}

export {TransformControlsUI}