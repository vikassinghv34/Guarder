import { Link, Text, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import Image from 'next/image';
import React from 'react';
import { Guard, GuardsProps } from 'src/Types/types';

const Guards = ({ fields }: GuardsProps) => {
  // console.log(fields);

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto">
        <div className=" relative w-full font-bold text-[32px] uppercase text-center pb-2.5 mb-2 before:content-[''] before:w-10 before:h-1.5 before:bg-yellow-400 before:absolute before:rounded-md before:-translate-x-1/2 before:bottom-0 before:left-1/2">
          <Text field={fields.GuardsHeading}></Text>
        </div>
        <div className="pb-4 text-center">
          <Text field={fields.GuardsDescription}></Text>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap md:flex-nowrap justify-center items-center">
          {fields.GuardsList.map((guard: Guard, index: number) => {
            const guardImage =
              'https://calm-mallard-fairly.ngrok-free.app/' +
              guard.fields.GuardImage.value?.src?.replace('/sitecore/shell/', '');

            return (
              <div key={index} className="px-4 mt-11 w-full sm:w-1/2 md:w-1/3">
                <div className="relative w-full overflow-hidden mx-auto">
                  <Image
                    className="w-full hover:scale-110 hover:overflow-hidden transition duration-500"
                    src={guardImage}
                    alt={guard.fields.GuardImage?.value?.alt as string}
                    height={440}
                    width={360}
                  ></Image>
                  <div className="absolute bottom-0 bg-[#1c1c1cbf] px-4 py-6 text-center w-full text-white">
                    <div className="text-xl mb-2">
                      <Text field={guard.fields.GuardName}></Text>
                    </div>
                    <div className="text-base mb-2">
                      <Text field={guard.fields.GuardDesignation}></Text>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-11 text-center">
          <Link
            className="bg-yellow-400 text-white capitalize py-2.5 px-11 inline-block border-2 border-yellow-400 transition duration-500 hover:bg-transparent hover:text-yellow-400"
            field={fields.GuardsCTA}
          >
            <Text field={fields.GuardsCTAText}></Text>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<GuardsProps>(Guards);
