import {
  // GetStaticComponentProps,
  // GraphQLRequestClient,
  Link,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Image from 'next/image';

import React from 'react';
import { AboutProps } from 'src/Types/types';

// import { AboutDocument } from './graphql/about.graphql';
// import config from 'temp/config';

const About = ({ fields }: AboutProps) => {
  // console.log(fields);
  // console.log(fields?.fields?.fields?.fields[1]?.data);

  const AboutImg =
    'https://frank-corgi-nice.ngrok-free.app' + fields.data.fields.AboutImage.data.value?.src;

  return (
    <div className="bg-white z-0">
      <div className="container mx-auto py-24 ">
        <div className="flex flex-col-reverse md:flex-row tablet:px-5">
          <div className="md:w-screen my-auto z-0">
            <Image
              className="w-screen"
              // field={fields.AboutImage}
              src={AboutImg}
              alt={fields.data.fields.AboutImage.data?.value?.alt as string}
              width={500}
              height={400}
            ></Image>
          </div>
          <div className="py-11 w-full px-6 shadow-slate-700 shadow-sm md:-ml-14 xl:my-10 z-10 bg-white">
            <h2 className="font-bold text-[32px] uppercase">
              <Text field={fields?.data?.fields?.fields[1]?.data} />
              <span className="block w-10 h-1.5 bg-yellow-400 rounded-md mt-1 "></span>
            </h2>
            <p className="py-4">
              <Text field={fields.data.fields.fields[3].data}></Text>
            </p>
            <Link
              className="bg-yellow-400 inline-block text-white py-2.5 px-9 uppercase transition duration-500 hover:bg-white hover:text-yellow-400   border-2 border-yellow-400 "
              field={fields.data.fields.AboutReadMoreCTA.data}
            >
              <Text field={fields.data.fields.fields[4].data}></Text>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<AboutProps>(About);

// export const getStaticProps: GetStaticComponentProps = async (rendering, layoutData) => {
//   try {
//     const graphQLClient = new GraphQLRequestClient(config.graphQLEndpoint, {
//       apiKey: config.sitecoreApiKey,
//     });

//     const fields = await graphQLClient.request(AboutDocument as never, {
//       datasource: rendering?.dataSource,
//       language: layoutData?.sitecore?.context?.language,
//     });
//     return {
//       fields: { fields },
//     };
//   } catch (error) {
//     console.error('GraphQL Request error: ', error);
//     return null;
//   }
// };
