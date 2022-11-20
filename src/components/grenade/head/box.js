const Box = ({position}) => {
	return (
		<group position={position}>
			<mesh>
				<boxBufferGeometry args={[12, 6, 6]} attach='geometry' />
				<meshPhongMaterial attach='material' 
				color={0xffff00}
				specular={0x333333}
				shininess={25}
				/>
			</mesh>
		</group>
	)
}

export default Box
