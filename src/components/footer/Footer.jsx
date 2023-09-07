import React, { useContext } from 'react'
import Context from '../../context/Context'
import { Language, Navlinks, Social } from '../components'
import { logoSrb, logoEng } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = ({ scrollToTop }) => {
  const { language } = useContext(Context)

  return (
    <div className='flex flex-col items-center gap-y-4 py-6'>
      <div
          className="w-2/6 xl:w-2/12 flex justify-center text-lg font-semibold"
          data-aos="fade-down"
          data-aos-delay="700"
        >
          <Link to="/" className="font-bold" onClick={scrollToTop}>
          {
              language === 'SRB'
              ? <img src={logoSrb} alt="logo" className={`cursor-pointer max-h-[100px] transform scale-[.67]`} />
              : <img src={logoEng} alt="logo" className={`cursor-pointer max-h-[100px] transform scale-[.67]`} />
            }
          </Link>
        </div>
      {/* <div className="flex gap-4">
        <Language />
        <Social />
      </div> */}
      <Navlinks scrollToTop={scrollToTop} />
    </div>
  )
}

export default Footer