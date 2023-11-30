import { Link, Text, withSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { useState } from 'react';
import { HeaderProps } from 'src/Types/types';
import { Navs } from 'src/Types/types';

const Header = ({ fields, sitecoreContext }: HeaderProps) => {
  // console.log(sitecoreContext.itemPath);
  // console.log(fields);

  const isHomePage = sitecoreContext.itemPath == '/';

  // console.log(fields);

  const [toggle, settoggle] = useState(false);

  const togglebtn = () => {
    toggle ? settoggle(false) : settoggle(true);
  };

  return (
    <nav
      className={` w-full
      flex flex-row justify-center items-center  px-7 ${
        isHomePage ? 'md:bg-transparent absolute' : 'bg-black relative'
      } `}
    >
      <div
        className={`z-30 md:w-1/6  flex relative flex-col md:flex-row md:justify-start justify-center items-start md:items-center w-screen ${
          isHomePage ? 'bg-transparent' : 'bg-black '
        }`}
      >
        <div className=" z-20 ml-0">
          <div className={`py-3 h-14 w-32 text-white  hover:cursor-pointer font-bold text-2xl`}>
            {/* <Image className="h-full" field={fields.HeaderLogo} height={40} width={150}></Image> */}
            <Link field={fields.data.fields.HeaderLogoLink.data}>
              <Text className="" field={fields.data.fields.fields[1]}></Text>
            </Link>
          </div>
        </div>

        <button
          onClick={togglebtn}
          className={` absolute z-30 right-0 block md:hidden outline-none text-white ml-auto font-bold`}
        >
          {toggle ? <span>&#935;</span> : <span>&#9778;</span>}
        </button>
      </div>
      <div
        className={` absolute  z-20 text-center  md:top-0 md:relative transition-all w-full duration-700  md:w-5/6 ${
          toggle ? 'top-14 md:top-0' : '-top-96 md:top-0'
        } ${isHomePage ? 'bg-transparent backdrop-blur-[5px]' : 'bg-black/70 '}`}

        // className={`relative transition-all duration-500 bg-black text-center ${
        //   toggle ? 'h-0 visib' : 'h-14'
        // }`}
      >
        <ul className="flex flex-col  md:flex-row justify-end ">
          {fields?.data.fields.HeaderNavs?.data.map((Navs: Navs, index: number) => {
            // console.log(Navs.fields.NavTitle);

            return (
              <li
                key={index}
                className={` px-4 py-3 md:pb-2 md:pt-9  text-white font-normal transition duration-500 ${
                  isHomePage ? 'hover:bg-black ' : 'hover:bg-white hover:text-black'
                } `}
              >
                <Link field={Navs.fields.NavLink}>
                  <Text field={Navs.fields.NavTitle}></Text>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default withSitecoreContext()<HeaderProps>(Header);
