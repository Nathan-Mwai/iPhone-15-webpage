import { PerspectiveCamera, View, Html, OrbitControls } from '@react-three/drei'

import * as THREE from 'three'
import { Suspense } from 'react'
import Lights from './Lights'
import IPhone from './IPhone'

const ModelView = ({index, groupRef, gsapType, controlRef, setRotationSize, size, item}) => {
  return (
    <View 
    index={index}
    id={gsapType}
    className={`w-full h-full absolute ${index === 2 ? ' right-[-100%]' : ''}`}>
        {/* Ambient light first source of light */}
        <ambientLight intensity={0.3} />
{/* The Perspective camera simulates the eye of  human like me */}
        <PerspectiveCamera makeDefault position={[0,0,4]} />

        <Lights/>

        {/* This will enable me to be able to use my mouse to move the 3D */}
        <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={()=> setRotationState(controlRef.current.getAzimuthalAngle())}
        />


        <group ref={groupRef} name={`${index === 1} ? 'small : 'larger`} position={[0,0,0]}>

        <Suspense fallback={<Html><div>Loading....</div></Html>}>
        <IPhone
        scale={index === 1 ? [15,15,15]: [17,17,17]}
        item={item}
        size={size}
        />
        </Suspense>
        </group>
    </View>
  )
}

export default ModelView