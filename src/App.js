import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Tube } from '@react-three/drei'
import * as THREE from 'three'
import Grenade from './components/grenade'
import { DoubleSide } from "three"


const App = () => {
  return(
    <Canvas style={{height:'100vh', width:'100vw' }} camera={{ position: [0, -5, 60]}}>
      
      <pointLight position={[5, 5, 10]} intensity={0.4}/>
      
      <OrbitControls />
    
      <Grenade />

    </Canvas>
    )
}

export default App;
