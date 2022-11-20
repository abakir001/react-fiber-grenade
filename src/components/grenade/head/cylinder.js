import React, { useRef } from 'react'
import { useFrame } from "react-three-fiber"


const Cylinder = ({ position }) => {
	const cylRef = useRef();

	useFrame(() => {
		if (cylRef.current) {
			cylRef.current.rotation.x = [- Math.PI / 2]
		}
	})

	return (
		<mesh
			position={position}
			ref={cylRef}
		>
			<cylinderBufferGeometry args={[1, 1, 7, 8]} attach='geometry' />
			<meshPhongMaterial attach='material'
				color={0xffff00}
				specular={0x333333}
				shininess={25}
			/>
		</mesh>
	)
}

export default Cylinder
