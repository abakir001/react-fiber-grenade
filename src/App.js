import { useEffect, useRef, useState } from 'react';
import { Canvas, useThree } from "@react-three/fiber";
import { useFrame } from 'react-three-fiber'
import Grenade from './components/grenade'
import { OrbitControls } from '@react-three/drei'
import Plane from './components/plane'
import explosionMP3 from './assets/explosion.wav'
import boomIcon from './assets/explosion.png'
import Fire from './components/fire'
import './App.css'


const App = () => {
	const grenadeRef = useRef(null)
	const [isBlast, setIsBlast] = useState(false)

	const [settings, setSettings] = useState({
		ambientLight: 0,
		directionalLight: 0.5,
		pointLight: 0,
		spotLight: 0.3,
		orbitControls: false
	})

	const handleRangeChange = ({ target: { name, value } }) => {
		setSettings({
			...settings,
			[name]: value
		})
	}

	const handleCheckboxChange = ({ target: { name, checked } }) => {
		setSettings({
			...settings,
			[name]: checked
		})
	}

	const handleBlast = () => {
		const audio = new Audio(explosionMP3)
		audio.volume = 0.2
		audio.play()
		setIsBlast(true)
		setTimeout(() => {
			setIsBlast(false)
		}, [3000])
	}

	return (
		<>
			<div className="wrapper">
				<div className='lightWrapper'>
					<label htmlFor='ambientLight'>
						AmbientLight: {settings.ambientLight}
						<input
							type="range"
							min="0"
							max="1"
							step="0.1"
							id="ambientLight"
							name="ambientLight"
							onChange={handleRangeChange}
							value={settings.ambientLight}
						/>
					</label>
					<label htmlFor='directionalLight'>
						DirectionalLight: {settings.directionalLight}
						<input
							type="range"
							min="0"
							max="1"
							step="0.1"
							id="directionalLight"
							name="directionalLight"
							onChange={handleRangeChange}
							value={settings.directionalLight}
						/>
					</label>
					<label htmlFor='pointLight'>
						PointLight: {settings.pointLight}
						<input
							type="range"
							min="0"
							max="1"
							step="0.1"
							id="pointLight"
							name="pointLight"
							onChange={handleRangeChange}
							value={settings.pointLight}
						/>
					</label>
					<label htmlFor='spotLight'>
						SpotLight: {settings.spotLight}
						<input
							type="range"
							min="0"
							max="1"
							step="0.1"
							id="spotLight"
							name="spotLight"
							onChange={handleRangeChange}
							value={settings.spotLight}
						/>
					</label>
					<label htmlFor='orbitControls'>
						OrbitControls
						<input type="checkbox" id="orbitControls" name="orbitControls" onChange={handleCheckboxChange} />
					</label>
					<button
						className="explotion-button"
						onClick={handleBlast}
					>
						Explotion
						<img src={boomIcon} alt="boom" />
					</button>
				</div>
				<h3>Lights in react-three-fiber</h3>
				<p>
				Usage of the different Lights Sources as well as implementation of the other methods like texturing, perspective, shadows, reflectancy, shading improves realism of the 3D objects. <br />
				<a href="mailto:abakir001@yahoo.com">abakir001@yahoo.com</a>
				</p>
			</div>
			<Canvas
				shadowMap
				position={[0, 100, 0]}
				style={{ height: 'calc(100vh - 18px)', backgroundColor: 'lightgrey' }}
				camera={{ position: [10, 15, 57] }}
			>
				<ambientLight intensity={settings.ambientLight} />
				<directionalLight intensity={settings.directionalLight} castShadow />
				<pointLight intensity={settings.pointLight} position={[50, 350, -250]} />
				<spotLight intensity={settings.spotLight} angle={0.3925} position={[50, 250, -250]} />
				{settings.orbitControls && <OrbitControls />}
				<Grenade
					orbitControls={settings.orbitControls}
					position={[0, 30, 0]}
					castShadow
					isBlast={isBlast}
				/>
				<gridHelper args={[150, 10, 'white', 'white']} receiveShadow />
				<Plane receiveShadow />

			</Canvas>
		</>
	)
}
export default App;