import Signal from "signals";
import { PropertiesPanel } from "./properties";
import { Menubar } from "./menubar";
import getThreeObject from "../helpers/getThreeObject";
import getThreeMaterial from "../helpers/getThreeMaterial";
import {getThreeLight , getThreeLightHelper} from "../helpers/getThreeLight"
function Editor(scene) {
  // console.log("I am running");
  this.signals = {
    addObject: new Signal(),
    removeObject: new Signal(),
    setCurrentObject: new Signal(),
    updateObjectTransforms:new Signal(),
    updateObjectProperty:new Signal(),
    updateTransformControls: new Signal(),
    addNewMaterial:new Signal(),
    setMaterial:new Signal(),
    addLights : new Signal(),

    
  };
  this.objects = [];
  this.lights=[];
  this.materials=[]
  this.currentObject = null;
  this.propertiesPanel = new PropertiesPanel(this)
  this.menubar = new Menubar(this)





  this.signals.addObject.add(function (mesh=null, editor , name=null ) {
    if(mesh){
      scene.children[0].add(mesh);
      editor.objects.push(mesh)
    }else if(name){
      console.log("adding the object" , name)
      const mesh =  getThreeObject(name)
      if(mesh){
        scene.children[0].add(mesh)
        editor.objects.push(mesh)
      }
    }
    // console.log(editor.objects)
    
  });
  // this.signals.addObject.add(function (mesh=null, editor , name=null) {
  //   editor.objects.push(mesh);
  //   console.log(editor.objects);
  // });

  this.signals.setCurrentObject.add(function (object, editor) {
    const transformControls = scene.children[1];
    if (object) {
      transformControls.detach();
      transformControls.attach(object);
      editor.currentObject = object;
    } else {
      transformControls.detach();
      editor.currentObject = object;
    }
    // console.log(editor.currentObject)
  });

  this.signals.setCurrentObject.add(function(object, editor){
    editor.propertiesPanel.updateObjectPanel(object?`${object.type}-${object.uuid.slice(0,5)}`:"Scene")
  })

  this.signals.updateObjectTransforms.add(function(position , rotation , scale , editor){
    // console.log(position , rotation , scale)
    const data = {
      position : position,
      rotation : rotation,
      scale : scale
    }
    editor.propertiesPanel.updateObjectTransforms(data)
  })

  this.signals.updateObjectProperty.add(function(property , values , editor){
    
    if(editor.currentObject){
      editor.currentObject[property].x=values[0]
      editor.currentObject[property].y=values[1]
      editor.currentObject[property].z=values[2]

    }
  })

  this.signals.updateTransformControls.add(function(mode , editor){
    if(editor.currentObject){
      const transformControls = scene.children[1];
      transformControls.setMode(mode)
    }
    
  }) 

  this.signals.setMaterial.add(function(name, editor){
    const material = getThreeMaterial(name)
    if(editor.currentObject){
      editor.currentObject.material=material
      
    }
  })

  this.signals.addLights.add(function(name , editor){
    const light = getThreeLight(name)
    scene.children[0].add(light)
    editor.objects.push(light)
    


  })
}
export { Editor };
