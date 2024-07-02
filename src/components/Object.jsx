import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Object = ({ object }) => {
    const meshRef = useRef();

    const geometries = {
        box: <boxGeometry args={[1.7, 1.7, 1.7]} />,
        torus: <torusGeometry args={[1.4, 0.6, 16, 100]} />,
        dode: <dodecahedronGeometry args={[1.1]} />,
    };

    const geometry = geometries[object.geometry] || <boxGeometry args={[2, 2, 2]} />;

    useFrame(() => {
        if (meshRef.current && object.isRotating) {
            meshRef.current.rotation.x += object.speed;
            meshRef.current.rotation.y += object.speed;
        }
    });

    return object.isVisible ? (
        <mesh ref={meshRef} position={object.position}>
            {geometry}
            <meshNormalMaterial />
        </mesh>
    ) : null;
}

export default Object;
