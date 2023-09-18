import Signal from "signals";
import { PropertiesPanel } from "./properties";

function Editor(scene) {
  // console.log("I am running");
  this.signals = {
    addObject: new Signal(),
    removeObject: new Signal(),
    setCurrentObject: new Signal()
  };
  this.objects = [];
  this.currentObject = null;
  this.propertiesPanel = new PropertiesPanel(this)





  this.signals.addObject.add(function (mesh, editor) {
    scene.children[0].add(mesh);
  });
  this.signals.addObject.add(function (mesh, editor) {
    editor.objects.push(mesh);
    console.log(editor.objects);
  });

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
  });

  this.signals.setCurrentObject.add(function(object, editor){
    editor.propertiesPanel.updateObject(object?"Object":"Scene")
  })
}
export { Editor };