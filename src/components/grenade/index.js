import React, { useRef, useState } from 'react'
import GrenadeBody from './grenadeBody'
import GrenadeHead from './head'
import GrenadeHandle from './curve'
import { useFrame, useThree } from 'react-three-fiber'
import { softShadows } from "@react-three/drei"

//softShadows()
const Grenade = (props) => {
  const grenadeRef = useRef(null)
  const { isBlast ,...rest } = props

  useFrame(() => {
		if (isBlast && grenadeRef.current) {
			const grenadePos = grenadeRef.current.position || null
			const [grenadeHead, grenadeBody, grenadeHand] = grenadeRef.current.children

			grenadeHead.position.y += 50
			grenadeHand.position.y += 50
			for (const grenadeBall of grenadeBody.children) {
				for (const child of grenadeBall.children) {
					// TODO: More complicated logic depending on grenade center
					const xDiff = child.position.x - grenadePos.x
					const zDiff = child.position.z - grenadePos.z

					child.position.set(
						child.position.x + xDiff,
						child.position.y + Math.floor(Math.random() * 15),
						child.position.z += zDiff * 0.1
					)
				}
			}
		}
	})

  useFrame(() => {
    if (grenadeRef?.current) {
      grenadeRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={grenadeRef} {...rest} castShadow>

      {/* 
        This is whole grenade.
        It contains GrenadeHead, GrenadeHand, GrenadeBody.

      */}
      <GrenadeHead castShadow/>
    
      <GrenadeBody position={[0, -13, 0]} castShadow/>

      <GrenadeHandle />

    </group>
  )
}

export default Grenade
