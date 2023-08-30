import { logo, logo1, logoLight, logoDark } from "../assets/assets";

const Logo = ({ height, width }) => {

  return (
    <img src={logoLight} alt="logo" className={`cursor-pointer w-[${width}px] h-[${height}px]`} />
    
  );
};

export default Logo;
