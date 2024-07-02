import React, { useState } from 'react';
import Controllers from './components/Controllers';
import { Canvas } from '@react-three/fiber';
import Object from './components/Object';

function App() {
    const initialState = [
        { speed: 0.01, isRotating: true, isVisible: true, position: [-7, 0, 0], geometry: 'box' },
        { speed: 0.01, isRotating: true, isVisible: true, position: [0, 0, 0], geometry: 'torus' },
        { speed: 0.01, isRotating: true, isVisible: true, position: [7, 0, 0], geometry: 'dode' },
    ];

    const [objects, setObjects] = useState(initialState);

    return (
        <div className='w-screen h-screen'>
            <div className='w-full h-1/2'>
                <Controllers objects={objects} setObjects={setObjects} />
            </div>
            <div className='w-full h-1/2'>
            <Canvas shadows>
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} />
                {objects.map((object, index) => (
                    <Object key={index} object={object} />
                ))}
            </Canvas>
            </div>
        </div>
    );
}

export default App;
