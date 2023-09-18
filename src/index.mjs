import "./styles.css";
import * as THREE from "three"
import {Editor} from "./editor"
import  {setControls} from "./setControls"
import { PropertiesPanel } from "./properties";





const scene= new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75 , window.innerWidth/window.innerHeight , 0.1 , 1000)
camera.position.z = 5

const editor = new Editor(scene)
const renderer = new THREE.WebGLRenderer()
 
const addedObject = new THREE.Object3D()
scene.add(addedObject)

renderer.setSize(window.innerWidth , window.innerHeight)
document.getElementById("app").appendChild(renderer.domElement)
function animate(){
  requestAnimationFrame(animate)
  renderer.render(scene , camera)
}

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshNormalMaterial()
const box = new THREE.Mesh(geometry , material)
box.name = "box"



editor.signals.addObject.dispatch(box , editor)

setControls(scene , renderer , camera , editor)
const [segments , division] = [10 , 10]
const gridHelper = new THREE.GridHelper(segments , division)
scene.add(gridHelper)
animate()

// scene.add(mapControls)
// transformControl.setMode("rotate")


