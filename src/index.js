import { Canvas } from "@react-three/fiber"
import { useGLTF, Stage, OrbitControls, Edges } from "@react-three/drei"
import "./index.css"
import r2wc from "@r2wc/react-to-web-component"

function Model() {
  const { nodes } = useGLTF("/headless.glb")
  return (
    <group dispose={null}>
      <mesh geometry={nodes.Cube.geometry}>
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
    </group>
  )
}

function MyCanvas() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 3], fov: 50 }}>
      <Stage contactShadow={{ resolution: 1024, scale: 10 }}>
        <Model />
      </Stage>
      <OrbitControls makeDefault dampingFactor={0.3} />
    </Canvas>
  )
}

const HelloWC = r2wc(MyCanvas, {
  props: { name: "string" }
})

customElements.define("hello-wc", HelloWC)
