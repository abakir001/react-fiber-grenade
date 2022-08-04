import React, { useRef } from 'react'
import GrenadeBody from './grenadeBody'
import GrenadeHead from './head'
import GrenadeHandle from './curve'
import { useFrame } from 'react-three-fiber'


const Grenade = () => {
  const grenadeRef = useRef(null)

  useFrame(() => {
    if (grenadeRef.current) {
      grenadeRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={grenadeRef}>

      {/* 
        This is whole grenade.
        It contains GrenadeHead, GrenadeHand, GrenadeBody.

      */}
      <GrenadeHead />
    
      <GrenadeBody position={[0, -13, 0]}/>

      <GrenadeHandle />

    </group>
  )
}

export default Grenade
