import { Text, Link, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Footerprops, Navs } from 'src/Types/types';

library.add(faFacebook, faInstagram);
// const iconName = [faFacebook, faInstagram];
const Footer = ({ fields }: Footerprops) => {
  // console.log(fields);

  return (
    <div className="bg-black">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 text-white py-7 px-4 container mx-auto">
        <div className="md:text-left text-center">
          <div className="text-2xl font-bold py-4">
            <Text field={fields.FooterLogo}></Text>
          </div>
          <div className="text-md flex flex-col">
            <p>
              <Text field={fields.FooterDescription}></Text>
            </p>
          </div>
        </div>
        <div className="md:text-left text-center">
          <div className="text-2xl py-4">
            <Text field={fields.FooterContactUsLabel}></Text>
          </div>
          <div className="text-md flex flex-col">
            <p>
              <Text field={fields.FooterContactAddress}></Text>
            </p>
            <p>
              <Text field={fields.FooterContactNumber}></Text>
            </p>
            <p>
              <Text field={fields.FooterContactMail}></Text>
            </p>
          </div>
        </div>
        <div className="md:text-left text-center">
          <div className="text-2xl py-4">
            <Text field={fields.FooterLinksLabel}></Text>
          </div>
          <ul className="text-md">
            {fields.FooterLinks.map((Links: Navs, Index: number) => {
              // console.log(Links);
              return (
                <li className="" key={Index}>
                  <Link field={Links.fields.NavLink}>
                    <Text field={Links.fields.NavTitle}></Text>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="md:text-left text-center">
          <div className="text-xl py-4">
            <Text field={fields.FooterNewsletterLabel}></Text>
          </div>
          <form
            action="/"
            className="flex flex-col justify-center md:items-start items-center gap-3"
          >
            <input
              type="text"
              className="rounded-3xl capitalize placeholder-slate-600 text-base w-3/4 sm:w-1/2 md:w-5/6 px-2.5 py-2 text-black outline-none"
              placeholder="Enter your email"
            />
            <Link
              field={fields.FooterSubscribeCTA}
              className="rounded-3xl inline-block text-center uppercase bg-yellow-400 text-white py-1.5 px-2 w-2/4 sm:w-1/4 md:w-2/4 border-2 border-yellow-400 transition duration-500 hover:bg-transparent hover:text-yellow-400"
            >
              <Text field={fields.FooterSubscribeCTAText}></Text>
            </Link>
          </form>
          <ul className="flex text-white flex-row gap-1 justify-center items-center md:justify-start mt-2">
            {/* {fields.FooterSocialIcons.map((Icon: Icons, Index: number) => {
              const iName = 'fa' + Icon.fields.SocialMediaName.value;
              console.log(iName);
              return (
                <li key={Index} className="text-white px-1">
                  <Link field={Icon.fields.SocialMediaLink}>
                    <FontAwesomeIcon icon={faFacebook} si ze="2x" />
                  </Link>
                </li>
              );
            })} */}
            <li className=" px-1 ">
              <Link field={fields.FooterSocialIcons[0].fields.SocialMediaLink}>
                <FontAwesomeIcon icon={faFacebook} size="2x" height={30} width={30} />
              </Link>
            </li>
            <li className="px-1">
              <Link field={fields.FooterSocialIcons[1].fields.SocialMediaLink}>
                <FontAwesomeIcon height={30} width={30} icon={faInstagram} size="2x" />
              </Link>
            </li>
            <li className="px-1">
              <Link field={fields.FooterSocialIcons[2]?.fields.SocialMediaLink}>
                <FontAwesomeIcon height={30} width={30} icon={faYoutube} size="2x" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center w-full py-3 text-white vikas">
        <Text field={fields.FooterCopyrightLabel}></Text>
        {/* <FontAwesomeIcon icon={faFacebook} /> */}
      </div>
    </div>
  );
};

export default withDatasourceCheck()<Footerprops>(Footer);
