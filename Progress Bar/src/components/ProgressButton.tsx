import React from 'react'

interface ProgressButtonProps {
  onClick: () => void
  textValue : string
}

const ProgressButton : React.FC<ProgressButtonProps>= ({onClick, textValue}) => {
  return (
    <>
      <button onClick={onClick} style={{}}>{textValue}</button>
    </>
  )
}

export default ProgressButton