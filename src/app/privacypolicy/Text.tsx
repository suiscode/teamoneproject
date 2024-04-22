import React from "react";

function Text() {
  const home = [
    {
      text: "Pinecone Car Rental is the company's official online shopping website, and these terms and conditions govern your relationship with the use and purchase of this website. This condition is subject to acceptance and confirmation by the user before making a purchase or using the website. Pinecone Car Rental (hereinafter referred to as the organization) and the user (hereinafter referred to as the user) will jointly monitor the implementation of these terms of service. Pinecone Car Rental is the company's official online shopping website, and these terms and conditions govern your relationship with the use and purchase of this website. This condition is subject to acceptance and confirmation by the user before making a purchase or using the website. Pinecone Car Rental (hereinafter referred to as the organization) and the user (hereinafter referred to as the user) will jointly monitor the implementation of these terms of service. This condition is subject to acceptance and confirmation by the user before making a purchase or using the website. Pinecone Car Rental (hereinafter referred to as the organization) and the user (hereinafter referred to as the user) will jointly monitor the implementation of these terms of service.",
    },
    {
      title: "• Third-Party Data Sources.",
      text: "We may collect Personal Information from third-party data sources such as advertising networks, marketing agencies, internet service providers, data brokers, operating systems and platforms, analytics firms, government agencies, and social networks.",
    },
    {
      title: "• Personal Information Voluntarily Provided by Consumers.",
      text: "You are not required to provide us your Personal Information to view Pinecone Car Rental Websites unless you wish to voluntarily provide your Personal Information in order to be contacted by us, a vehicle seller or other Third Party providing the vehicles or other products or services in which you are interested. If you choose not to provide the requested information, you may not be able to use some or all of the features of the Pinecone Car Rental Sites or Services, and we may not be able to fulfill your requested interaction. We may also ask you to provide us with Personal Information when you communicate with us online or offline by telephone or texting, including in connection with customer surveys. Voluntarily-Provided Personal Information is also obtained from Third Parties that sell Consumer Requests to Pinecone Car Rental where the Voluntarily-Provided Personal Information is collected by the Third Party from the Consumer on the Third Party’s website and sold to Pinecone Car Rental to fulfill the Consumer’s Consumer Request by referral to an Pinecone Car Rental vehicle seller customer. Additionally, we may collect Personal Information that you choose to provide on the Pinecone Car Rental Sites when you register for one of our products or services, including the Sell My Car feature express an interest in buying or selling a car (such as by using our Email the Seller function) or provide payment card information for one of our products or services.",
    },
    {
      title: "• Vehicle Dealerships.",
      text: "We may collect Personal Information from vehicle dealerships with whom you interact. For example, if you purchase or lease a vehicle at a dealership, the dealership may share with us Personal Information relating the vehicle you purchased from the dealer or another Third Party.",
    },
  ];
  return (
    <div>
      {home.map(({ title, text }, index) => {
        return (
          <div key={index} className="flex flex-col">
            <div className="flex flex-col gap-2 p-5">
              <div className="text-xl font-bold">{title}</div>
              <div className="text-base">{text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Text;
