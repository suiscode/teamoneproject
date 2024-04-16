import React from "react";

function Text() {
  const home = [
    {
      title:
        "• We encourage Consumers to read these Terms of Use carefully before providing any Personal Information on any Pinecone Car Rental Site.",
      text: "By accessing, browsing and/or using the Pinecone Car Rental Site, you acknowledge that you have read, understood, and agree, to be bound by these Terms of Use and the Pinecone Car Rental Privacy Policy, which is incorporated by reference into these Terms of Use and can be reviewed by clicking here. If you do not agree to these Terms of Use, you are not authorized to use the Site. The material provided on the Site is protected by law, including, but not limited to, Mongolia Copyright Law and international treaties. The Site is controlled and operated by Pinecone Car Rental from its offices within the Mongolia. Pinecone Car Rental makes no representation that materials available on the Pinecone Car Rental Site are appropriate or available for use in other locations, and access to them from territories where their contents are illegal is prohibited. Those who choose to access the Site from other locations do so at their own initiative and are responsible for compliance with applicable foreign laws. By submitting your information, including telephone, number and email address to us, you expressly consent to sell/share your information with Pinecone Car Rental, its affiliates, automotive dealers, and other automotive or non-automotive third parties (and their agents or representatives), and authorize them to contact you through automated means (e.g., automatic telephone dialing system, text, artificial or pre-recorded messaging) for promotional marketing purposes at the phone number and email address you provided, via live, pre-recorded, or auto dialed via telephone, mobile device (including SMS and MMS), and/or email even if your number is currently listed on Federal or any state Do Not Call or Do Not Email. The foregoing consent and opt-in is not required as a condition to purchasing or leasing vehicles or other products or services. You acknowledge that your carrier’s message and data rates may apply for calls or text messages and that neither Pinecone Car Rental nor the third parties are responsible for these charges. Messages may be recurring and frequency may vary. You may revoke your consent and opt-out from receiving calls or text messages at any time. You may opt-out of text messages by replying STOP to any text message you receive or follow other opt-out instructions included with the text message. You acknowledge and agree that you may receive a text message confirming your opt-out. To opt-out of telephone calls from Pinecone Car Rental (but not text messages), follow the instructions in our Privacy Policy. To opt-out of receiving telephone calls or texts from third parties, please contact the third party directly. To obtain assistance from our ConsumerCare Department, Reply AUTO HELP from a text message or contact our ConsumerCare Department as provided in our Privacy Policy.",
    },
    {
      title: "• Description of Pinecone Car Rental Services",
      text: "Pinecone Car Rental is primarily engaged in the business of digital marketing for the automotive industry that assists automotive retail dealers, automotive manufacturers and other third parties to sell new and used vehicles or other products and services to Consumers through our programs for Consumer online referrals, dealer marketing products and services, email marketing, postal advertising and online advertising. The primary component of our business is the collection of personal information voluntarily provided by Consumers in order to connect the Consumer to individuals looking to purchase a vehicle, vehicle dealers, vehicle manufacturers and other Third Parties offering products and services related to the automotive field and vehicle acquisition, ownership or use or other products and services not related to automotive industry in which the Consumer may have an interest and send the Consumer advertising, marketing or content. Pinecone Car Rental offers shopping, selling and research features to help Consumers acquire, lease, or sell a new or used vehicle, including new and used vehicle research, new and used vehicle price quotes supplied by third party vehicle dealers or manufacturers (“Vehicle Rent”), used vehicle listings, as well as information and links to providers of insurance, automotive finance, extended warranties or vehicle service contracts and other products and services. Pinecone Car Rental also offers a Sell My Car feature to help individuals sell their vehicles to private parties through the Site (“Private Party Vehicle Sellers”)",
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
