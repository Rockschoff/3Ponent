import * as THREE from "three"
import { getThreeLight } from "./getThreeLight"
function getThreeObject(name){
    mapping={
        "Box":new THREE.Mesh(new THREE.BoxGeometry(1,1,1) , new THREE.MeshBasicMaterial({color : "hotpink"})),
        "Sphere":  new THREE.Mesh(new THREE.SphereGeometry() , new THREE.MeshBasicMaterial({color : "hotpink"})),
        "Capsule":new THREE.Mesh(new THREE.CapsuleGeometry() , new THREE.MeshBasicMaterial({color : "hotpink"})),
        "Cone":new THREE.Mesh(new THREE.ConeGeometry() , new THREE.MeshBasicMaterial({color : "hotpink"})),
        "Cylinder":new THREE.Mesh(new THREE.CylinderGeometry() , new THREE.MeshBasicMaterial({color : "hotpink"})),
        "DodecaH": new THREE.Mesh(new THREE.DodecahedronGeometry() , new THREE.MeshBasicMaterial({color : "hotpink"})),
        "Circle":new THREE.Mesh(new THREE.CircleGeometry() , new THREE.MeshBasicMaterial({color : "hotpink"})),
        "Point.l": getThreeLight("Point.l"),
        "Direct.l": getThreeLight("Direct.l"),
        "HemiSp.l":getThreeLight("HemiSp.l"),
        "Spot.l":getThreeLight("Spot.l")

    }

    const ans =  mapping[name]
    return ans
}

export default getThreeObject