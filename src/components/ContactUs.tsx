import { Text, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import Image from 'next/image';

import React, { ChangeEvent } from 'react';

import { ContactUsProps } from 'src/Types/types';
import { useRouter } from 'next/router';
import axios from 'axios';

const ContactUs = ({ fields }: ContactUsProps) => {
  // console.log(fields);

  // const default_form
  // const [isResponse, setIsResponse] = useState(false);
  // const [formData, setFormData] = useState(default_form);

  const router = useRouter();
  const API_ENDPOINT = 'https://calm-mallard-fairly.ngrok-free.app/sitecore/api/graph/items/master';

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = event.target.Name.value;
    const email = event.target.Email.value;
    const number = event.target.Number.value;
    const message = event.target.Message.value.trim();

    const formData = {
      name: name,
      email: email,
    };

    const response = await axios.post(
      API_ENDPOINT,
      {
        query: `
        mutation CreateItem {
          createItem(
            name: "${name}"
            id: "{00000000-0000-0000-0000-000000000000}"
            # id:"{72533645-C765-4FB4-B70D-575718F00BBE}"
            template: "{66FC99A4-477A-4A1F-BE22-32DF32EF9F6B}"
            parent: "/sitecore/content/POC/guarder/Data/ContactUs"
            language: "en"
            fields: [
              { name: "Name", value: "'${name}'" }
              { name: "Email", value: "'${email}'" }
              { name: "PhoneNumber", value: "'${number}'" }
              { name: "Message", value: "'${message}'" }
              # { name: "text", value: "'This is an example item created with GraphQL'" }
            ]
          ) {
            path
            name
          }
        }
        
        `,
      },
      {
        headers: {
          sc_apikey: '{766E1592-5F2B-4DAF-988D-E7E5180232CA}',
        },
      }
    );

    const response2 = await axios.post('/api/sendEmail', JSON.stringify(formData), {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    });

    console.log('GQL Respons2: ', response2.data);

    if (response2.data.errors) {
      alert(response2.data.errors[0].extentions.code);
      // setIsResponse(true);
    } else {
      alert(`Thank You, ${name}, for contacting us`);
      // setIsResponse(true);
      router.push(`${fields.ContactUsCTA.value.href}`);
    }

    console.log('GQL Response1: ', response.data);

    if (response.data.errors) {
      alert(response.data.errors[0].extentions?.code.value);
      // setIsResponse(true);
    } else {
      alert(`Thank You, ${name}`);
      // setIsResponse(true);
      router.push(`${fields.ContactUsCTA.value.href}`);
    }
  };

  const BgImage =
    'https://calm-mallard-fairly.ngrok-free.app/' +
    fields.ContactUsBackgroundImage.value?.src?.replace('/sitecore/shell/', '');
  return (
    // <div className="relative bg-cover bg-no-repeat" style={{ backgroundImage: `url(${BgImage})` }}>
    //   <div className=" bg-black/[0.5] py-24"></div>
    // </div>
    <section id="About">
      <div className="py-24 bg-cover bg-black/[0.5] relative">
        <div className=" absolute top-0 left-0 w-full h-full overflow-hidden -z-10 flex justify-center items-center">
          <div className=" w-screen">
            <Image
              className=" min-h-screen min-w-fit"
              src={BgImage}
              alt={fields?.ContactUsBackgroundImage?.value?.alt as string}
              //   layout="fill"
              height={1500}
              width={2000}
            />
          </div>
        </div>
        <div className="data">
          <div className="container mx-auto">
            <div className="relative w-full text-center pb-2.5 mb-2 text-white font-bold text-[32px] uppercase before:w-10 before:bg-yellow-400 before:h-1.5 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:content-[''] before:rounded-md">
              <Text field={fields.ContactUsHeading}></Text>
            </div>

            <div className="md:w-7/12 mx-auto px-4">
              <form onSubmit={handleSubmit} action="/" className=" mt-9">
                <input
                  name="Name"
                  id="Name"
                  className="w-full my-4 h-11 pl-4 placeholder:text-black outline-none"
                  type="text"
                  required
                  placeholder={fields.ContactUsNamePlaceholder.value.toUpperCase()}
                ></input>
                <input
                  name="Email"
                  id="Email"
                  className="w-full my-4 h-11 pl-4 placeholder:text-black outline-none"
                  type="text"
                  required
                  placeholder={fields.ContactUsEmailPlaceholder.value.toUpperCase()}
                ></input>
                <input
                  name="Number"
                  id="Number"
                  className="w-full my-4 h-11 pl-4 placeholder:text-black outline-none"
                  type="text"
                  required
                  placeholder={fields.ContactUsNumberPlaceholder.value.toUpperCase()}
                ></input>

                <textarea
                  name="Message"
                  id="Message"
                  className="w-full py-2 my-4 h-32 pl-4 placeholder:text-black outline-none"
                  // type="text"
                  required
                  rows={3}
                  placeholder={fields.ContactUsMessagePlaceholder.value.toUpperCase()}
                ></textarea>
                <div className="w-full text-center">
                  <button
                    type="submit"
                    className="mt-6 bg-yellow-400 py-2.5 px-14 text-white font-bold uppercase inline-block border-2 border-yellow-400 transition duration-500 hover:bg-transparent hover:text-yellow-400"
                  >
                    <Text field={fields.ContactUsCTAText}></Text>
                  </button>
                  {/* </Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withDatasourceCheck()<ContactUsProps>(ContactUs);
