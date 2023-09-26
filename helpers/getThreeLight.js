import * as THREE from "three"
function getThreeLight(name){
    const newObject = new THREE.Object3D()
    
    
    const lightMapping={
        "Point.l":new THREE.PointLight() ,
        "Direct.l":new THREE.DirectionalLight(),
        "HemiSp.l":new THREE.HemisphereLight(),
        "Spot.l":new THREE.SpotLight() 
    }
    const helperMapping={
        "Point.l":"PointLightHelper" ,
        "Direct.l":"DirectionalLightHelper",
        "HemiSp.l":"HemisphereLightHelper",
        "Spot.l":"SpotLightHelper" 

    }
    const light = lightMapping[name]
    const helper= new THREE[helperMapping[name]](light)
    
    
    newObject.add(light)
    newObject.add(helper)

    return newObject
}

export {getThreeLight}