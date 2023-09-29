import {
  GetStaticComponentProps,
  GraphQLRequestClient,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { Client, ClientsProps } from 'src/Types/types';

import Slider from 'react-slick';
import Image from 'next/image';
import config from 'temp/config';

import { ClientsDocument } from './graphql/clients.graphql';

const Clients = ({ results }: ClientsProps) => {
  // console.log(results);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="bg-white py-24 md:px-4 md:mx-10">
      <div className="container mx-auto text-center">
        <div className="w-full text-black font-bold text-[32px] uppercase">
          <Text field={results.results.fields.fields[0]}></Text>
          <span className="block w-10 h-1.5 bg-yellow-300 mx-auto my-1 rounded-md"></span>
        </div>
        <Slider {...settings}>
          {results.results.fields.ClientsList.data.map((client: Client, index: number) => {
            // console.log(client);
            const clientImage =
              'https://guarderssc.dev.local/' + client.fields.ClientImage.value?.src;
            return (
              <div key={index} className="w-full mt-11 px-14 md:px-28">
                <div className="">
                  <Image
                    className="mx-auto"
                    src={clientImage}
                    alt={client.fields.ClientImage?.value?.alt as string}
                    width={145}
                    height={110}
                  ></Image>
                </div>
                <div className="mt-5">
                  <div className="text-lg font-bold">
                    <Text field={client.fields.ClientName}></Text>
                  </div>
                  <p className="py-5">
                    <Text field={client.fields.ClientDescription}></Text>
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<ClientsProps>(Clients);

export const getStaticProps: GetStaticComponentProps = async (rendering, layoutData) => {
  try {
    const graphQLClient = new GraphQLRequestClient(config.graphQLEndpoint, {
      apiKey: config.sitecoreApiKey,
    });

    const results = await graphQLClient.request(ClientsDocument as any, {
      datasource: rendering?.dataSource,
      language: layoutData?.sitecore?.context?.language,
    });
    return {
      results: { results },
    };
  } catch (error) {
    console.error('GraphQL Request Error: ', error);
    return null;
  }
};
