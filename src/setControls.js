import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TransformControls } from "three/examples/jsm/controls/TransformControls";

function setControls(scene, renderer, camera, editor) {
  // const mapControls = new MapControls(camera, renderer.domElement);
  const orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.enabled = false;
  const transformControls = new TransformControls(camera, renderer.domElement);
  scene.add(transformControls);
  transformControls.addEventListener("change", function(e){
    const obj = transformControls.object
    editor.signals.updateObjectTransforms.dispatch(obj.position ,
       obj.rotation,
        obj.scale,
         editor)
  })

  

  window.addEventListener("keydown", function (e) {
    if (e.key === "Alt") {
      console.log("shift down");
      orbitControls.enabled = true;
    }
  });
  window.addEventListener("keyup", function (e) {
    
    if (e.key === "Alt") {
      console.log("shift up");
      orbitControls.enabled = false;
    }else if(e.key=="s"){
      editor.signals.updateTransformControls.dispatch("scale" , editor)
    }else if(e.key=="r"){
      editor.signals.updateTransformControls.dispatch("rotate" , editor)
    }else if(e.key=="t"){
      editor.signals.updateTransformControls.dispatch("translate" , editor)
    }
  });

  const pointer = new THREE.Vector3([0, 0, 0.5]);
  const raycaster = new THREE.Raycaster();

  renderer.domElement.addEventListener("dblclick", function (event) {
    pointer.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    pointer.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);
    // console.log(pointer);
    const intersects = raycaster.intersectObjects(scene.children[0].children);
    if (intersects.length > 0) {
      
      editor.signals.setCurrentObject.dispatch(intersects[0].object, editor);
    } else {

      editor.signals.setCurrentObject.dispatch(null, editor);
    }
  });
}

export { setControls };
