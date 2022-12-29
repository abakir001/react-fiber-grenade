import React from 'react'

const GrenadeBody = ({ position }) => {
	return (
		<group position={position}>

			{[...Array(8).keys()].map(el => {
				const raduis = 5;
				let alpha = 0;
				alpha = alpha + el * Math.PI / 4;

				return (
					<group key={el}>
						<mesh
							position={[raduis * Math.cos(alpha), 2 * raduis * Math.sin(alpha), 0]}
						>
							<sphereBufferGeometry
								args={[6, 50, 50]} attach="geometry"
							/>
							<meshPhongMaterial attach='material'
								color={0xffff00}
								specular={0x333333}
								shininess={25}
							/>
						</mesh>

						<mesh
							position={[0, 2 * raduis * Math.sin(alpha), raduis * Math.cos(alpha)]}
						>
							<sphereBufferGeometry
								args={[6, 50, 50]} attach="geometry"
							/>
							<meshPhongMaterial attach='material'
								color={0xffff00}
								specular={0x333333}
								shininess={25}
							/>
						</mesh>
						<mesh
							position={[raduis * Math.cos(alpha), 0, raduis * Math.sin(alpha)]}
						>
							<sphereBufferGeometry
								args={[6, 50, 50]} attach="geometry"
							/>
							<meshPhongMaterial attach='material'
								color={0xffff00}
								specular={0x333333}
								shininess={25}
							/>
						</mesh>

					</group>

				)
			})}

		</group>
	)
}

export default GrenadeBody
