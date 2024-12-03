import { PerspectiveCamera, View, Html } from '@react-three/drei'
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

        <Suspense >
        <IPhone />
        </Suspense>
    </View>
  )
}

export default ModelView