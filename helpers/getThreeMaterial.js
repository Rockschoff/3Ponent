import * as THREE from "three"

export default function getThreeMaterial(name){

    switch (name){
        case "MeshBasicMaterial":
            return new THREE.MeshBasicMaterial()
        case "MeshDepthMaterial":
            return new THREE.MeshDepthMaterial()
        case "MeshLambertMaterial":
            return new THREE.MeshLambertMaterial()
        case "MeshMatcapMaterial":
            return new THREE.MeshMatcapMaterial()
        case "MeshNormalMaterial":
            return new THREE.MeshNormalMaterial()
        case "MeshPhongMaterial":
            return new THREE.MeshPhongMaterial()
        case "MeshPhysicalMaterail":
            return new THREE.MeshPhysicalMaterial()
        case "MeshStandardMaterial":
            return new THREE.MeshStandardMaterial()
        case "MeshToonMaterial":
            return  new THREE.MeshToonMaterial()
        case "MeshDistanceMaterial":
            return new THREE.MeshDistanceMaterial()
        default:
            return new THREE.MeshBasicMaterial()
            
    }

}