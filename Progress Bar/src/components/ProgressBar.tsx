import React from 'react';

interface ProgressBarProps {
  progress: number,
  backgroundColor: string,
  progressColor: string
}

const ProgressBar: React.FC <ProgressBarProps>= ({progress, backgroundColor, progressColor}) => {

  const textColor = progress >= 50 ? "white" : "black"
  return (
    <>
   <div style={{backgroundColor: `${backgroundColor}`, width: "200px", borderRadius: "10px" ,overflow: "hidden", position:"relative"}}>
    <div style={{width: `${progress}%`, backgroundColor: `${progressColor}`, height: `30px` }}></div>
    <span style={{position:"absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: textColor}}>{progress}%</span>
   </div>
    </>
  )
}

export default ProgressBar