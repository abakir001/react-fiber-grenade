import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { Tube } from '@react-three/drei';

class CustomSinCurve extends THREE.Curve {
  constructor(scale) {
    super();
    this.scale = scale;
  }
  getPoint(t) {
    const tx = t * 3 - 1.5;
    const ty = Math.sin(2 * Math.PI * t);
    const tz = 0;
    return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
  }
}

const GrenadeHandle = () => {
  const handleRef = useRef(null)
  const path = new CustomSinCurve(8)

  useEffect(() => {
    if (handleRef.current) {
      handleRef.current.rotation.z = 3
    }
  }, [handleRef])

  return (
    <group position={[15, -5, 0]} ref={handleRef}>
      <Tube args={[path, 20, 1.1, 8, false]}>
        <meshPhongMaterial attach='material'
          color={0xffff00}
          specular={0x333333}
          shininess={25}
        />
      </Tube>
    </group>
  )
}

export default GrenadeHandle
