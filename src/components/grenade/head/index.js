import React from 'react'
import Box from './box'
import Cylinder from './cylinder'


const GrenadeHead = () => {
	return (
		<group>
			<Box position={[0, 2, 0]}/>

	  <Cylinder position={[5.3, 4, 0]}/>
      <Cylinder position={[5.3, 0, 0]}/>
      <Cylinder position={[-5.3, 0, 0]}/>
      <Cylinder position={[-5.3, 4, 0]}/>
		</group>
	)
}

export default GrenadeHead
