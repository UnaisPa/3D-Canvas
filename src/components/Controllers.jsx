import React from 'react'
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
const Controllers = ({ objects, setObjects }) => {

    const handleSpeedChange = (index, value) => {
        const newObjects = [...objects];
        newObjects[index].speed = Math.max(0, parseFloat(value) || 0);
        setObjects(newObjects);
    };

    const toggleRotation = (index) => {
        const newObjects = [...objects];
        newObjects[index].isRotating = !newObjects[index].isRotating;
        setObjects(newObjects);
    };

    const toggleVisibility = (index) => {
        const newObjects = [...objects];
        newObjects[index].isVisible = !newObjects[index].isVisible;
        setObjects(newObjects);
    }

    return (
        <>
            <div className='w-full flex items-center justify-center gap-10 p-10' >
                {objects.map((object, index) => {
                    return (
                        <>
                            <div className='border w-1/4 p-2 rounded-md' key={object.geometry}>
                                <div className=' flex' >

                                    <button onClick={() => toggleVisibility(index)} className='border px-7 bg-blue-500 h-10 rounded-md  text-white hover:bg-blue-600'>
                                        Toggle {object.geometry}
                                    </button>
                                    <button onClick={() => toggleRotation(index)} className='border px-7 bg-blue-500 h-10 rounded-md  text-white hover:bg-blue-600'>
                                    {object.isRotating?<FaPause />:<FaPlay/>}
                                    </button>
                                </div>
                                <div className='mt-2 font-semibold' >
                                    <h5> Rotation Speed</h5>
                                    <div className='flex gap-2 mt-1'>
                                        <input type="range"
                                            min="0"
                                            max="1"
                                            step="0.01"
                                            value={object.speed}
                                            className=" bg-gray-100 h-8 w-9/12 rounded-md"
                                            style={{
                                                WebkitAppearance: "none",
                                                width: "100%",
                                                outline: "none",
                                            }}
                                            onChange={(e) => handleSpeedChange(index, e.target.value)}
                                        />
                                        <input type='number' onChange={(e) => handleSpeedChange(index, e.target.value)} className='w-3/12 pl-2 h-8 bg-gray-100 rounded-md outline-none' value={object.speed} />

                                    </div>
                                </div>
                            </div>

                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Controllers