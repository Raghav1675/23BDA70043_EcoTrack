import React,{useState,useEffect}from 'react';
// function Trig(){
//     const[windowWidth, setWindowWidth]= useState(window.innerWidth);
//     const[windowHeight, setWindowHeight]= useState (window.innerHeight);
//     useEffect(() => {
//         function handleResize(){
//             setWindowWidth (window.innerWidth);
//             setWindowHeight (window.innerHeight);
//         }
//        window.addEventListener('resize', handleResize);
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     return(
//         <div>
//             <p>{windowWidth}px * {windowHeight}px</p>
//         </div>
//     )
// }
const Trig=()=>{
    const [WindowSize,setWindowSize]=useState({
        width:window.innerWidth,
        height:window.innerHeight,
    });
    useEffect(()=>{
        const handleResize=()=>{
            setWindowSize({
                width:window.innerWidth,
                height:window.innerHeight,
            });
        };
        window.addEventListener('resize',handleResize);
        return ()=>{
            window.removeEventListener('resize',handleResize);
        };
    },[]);
    return WindowSize;

};
export default Trig;