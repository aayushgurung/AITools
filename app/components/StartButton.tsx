import { faPlay, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface buttonProps{
    isloading?:boolean,
    handleClick: () => void
}

const StartButton:React.FC<buttonProps> = ({isloading,handleClick}) => {
  
  return (
    <>
     <section className="container mx-auto mt-8 px-20">
          <div className="mt-8 mb-8 text-center">
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded shadow-lg focus:outline-none focus:ring focus:ring-indigo-300"
              onClick={handleClick}
              disabled={isloading}
            >
              <p className="text-lg">
                {isloading ? (
                  <FontAwesomeIcon
                    icon={faSpinner}
                    className="fa-solid fa-spin "
                    style={{ color: "#e0e7ff" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="fa-regular fa-image "
                    style={{ color: "#e0e7ff" }}
                  />
                )}{" "}
                Start
              </p>
            </button>
          </div>
        </section>
    </>
  )
}

export default StartButton