import { PopupButton } from '@typeform/embed-react'

function Typeform({children, className}) {
  return (
    <PopupButton id="dzswsFW3" className={`my-button ${className}`}>
      {children}
    </PopupButton>
  )
}

export default Typeform;