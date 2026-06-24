import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0,0,0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading />
        <Decal position={[0,0,1]} 
        rotation={[2*Math.PI, 0, 6.25]}
        flatShading
        map={decal} />
      </mesh>
    </Float>
  )
}

class BallErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

const BallCanvas = ({icon})=>{
  return(
   <Canvas
      frameloop="always"
      dpr={[1, 1.5]}
      gl={{
        preserveDrawingBuffer: true,
        powerPreference: "low-power",
        antialias: false,
        failIfMajorPerformanceCaveat: false,
      }}
      onCreated={({ gl }) => {
        gl.getContext().canvas.addEventListener('webglcontextlost', (e) => {
          e.preventDefault();
        }, false);
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <BallErrorBoundary>
          <OrbitControls
            enableZoom={false}
          />
          <Ball imgUrl={icon} />
        </BallErrorBoundary>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas