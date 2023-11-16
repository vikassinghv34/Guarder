import { Link, Text, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import Image from 'next/image';
import React from 'react';
import { Service, ServicesProps } from 'src/Types/types';

const Services = ({ fields }: ServicesProps) => {
  //   console.log(fields);

  return (
    <div className="bg-black py-24">
      <div className="container mx-auto">
        <div className="w-full text-center text-white font-bold text-[32px] uppercase">
          <Text field={fields.data.fields.fields[0]}></Text>
          <span className="bg-yellow-400 w-10 rounded-md mx-auto h-1.5 block my-1"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {fields.data.fields.ServicesList?.data.map((service: Service, index: number) => {
            // console.log(service);
            const serviceLogo =
              'https://frank-corgi-nice.ngrok-free.app/' +
              service.fields.ServiceLogo.value?.src?.replace('/sitecore/shell/', '');
            return (
              <div key={index} className="px-4">
                <div className="py-6 px-4 mt-11 bg-white mx-auto text-center">
                  <div className="">
                    <Image
                      className="mx-auto"
                      src={serviceLogo}
                      alt={service.fields.ServiceLogo.value?.alt as string}
                      width={75}
                      height={75}
                    ></Image>
                  </div>
                  {/* <div className="mt-6"> */}
                  <div className=" mb-5 font-bold text-lg uppercase mt-6">
                    <Text field={service.fields.ServiceTitle}></Text>
                  </div>
                  {/* </div> */}
                  <div className="mb-4">
                    <Text field={service.fields.ServiceDescription}></Text>
                  </div>
                  <div className="mt-2.5 inline-block">
                    <Link
                      className="bg-yellow-400 py-2 px-9 text-white uppercase inline-block border-2 border-yellow-400 hover:text-yellow-400 transition duration-500 hover:bg-transparent"
                      field={service.fields.ServiceCTA}
                    >
                      <Text field={service.fields.ServiceCTAText}></Text>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<ServicesProps>(Services);
