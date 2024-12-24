import React, { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState({
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {
        const updateClock = () => {
            const currentTime = new Date();
            setTime({
                hours: String(currentTime.getHours()).padStart(2, '0'),
                minutes: String(currentTime.getMinutes()).padStart(2, '0'),
                seconds: String(currentTime.getSeconds()).padStart(2, '0'),
            });
        };

        const intervalId = setInterval(updateClock, 1000);
        updateClock();

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex items-center justify-center ">
            <div className="flex items-center text-6xl font-mono text-white bg-gray-800 p-6 rounded-lg shadow-lg">
                <span id="hrs" className="mx-2">
                    {time.hours}
                </span>
                <span className="mx-1">:</span>
                <span id="min" className="mx-2">
                    {time.minutes}
                </span>
                <span className="mx-1">:</span>
                <span id="sec" className="mx-2">
                    {time.seconds}
                </span>
            </div>
        </div>
    );
}


export default Clock; 
