import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import github from "next-auth/providers/github";
import { FaHandPointRight } from "react-icons/fa";

function AboutUs() {
  const membersData = [
    {
      img: "/zolo.jpg",
      name: "Zoloo",
      about: "person about",
      ig: "https://www.instagram.com/zolushkazz#",
      github: "https://github.com/Zolushkazz",
    },
    {
      img: "/azaa.jpg",
      name: "Tselmeg",
      about: "person about",
      ig: "https://www.instagram.com/tselmeg_0711#",
      github: "https://github.com/Tsekutselmeg",
    },
    {
      img: "/ganaa.jpg",
      name: "Ganaa",
      about: "person about",
      ig: "https://www.instagram.com/_tulgagn#",
      github: "https://github.com/Ganggana",
    },
    {
      img: "/bilegt.jpg",
      name: "Bilegt",
      about: "person about",
      ig: "https://www.instagram.com/bblgttt#",
      github: "https://github.com/bilegtttttt",
    },
    {
      img: "/tuguu.jpg",
      name: "Tuguu",
      about: "person about",
      ig: "https://www.instagram.com/sb2014rtzn1#",
      github: "https://github.com/suiscode",
    },
    {
      img: "/garid.jpg",
      name: "Garid",
      about: "Person About",
      ig: "https://www.instagram.com/gar1da#",
      github: "https://github.com/Zolushkazz",
    },
    {
      img: "/azaa.jpg",
      name: "Azaa",
      about: "Person About",
      ig: "https://www.instagram.com/bench.press10#",
      github: "https://github.com/Zolushkazz",
    },
  ];
  return (
    <ScrollArea className="md:w-[1490px] whitespace-nowrap rounded-md border my-[50px]">
      <div className="flex md:w-max my-5 gap-[30px] object-fill p-[30px] text-white">
        {membersData?.map((el, index) => {
          return (
            <figure
              key={index}
              className="flex flex-col shrink-0 border border-white p-[20px] rounded-sm snap-x snap-mandatory"
            >
              <div className="snap-normal snap-center">
                <Image
                  className="h-fit w-fit object-cover rounded-sm "
                  src={el.img}
                  alt=""
                  width={400}
                  height={400}
                />
              </div>

              <div className="gap-[55px]">
                <div className="text-[30px] items-center justify-center text-center">
                  {el.name}
                </div>
                <div className="flex justify-end gap-3">
                  <div>
                    <Link href={el.ig} target="_blank">
                      <BsInstagram className="text-[25px]" />
                    </Link>
                  </div>
                  <div className="">
                    <Link href={el.github} target="_blank">
                      <FaGithub className="text-[25px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </figure>
          );
        })}
      </div>
      <div className="text-[35px] ml-[50px] mb-[20px] text-white">
        Scroll right <FaHandPointRight />
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default AboutUs;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { BsInstagram } from "react-icons/bs";
// import { FaGithub } from "react-icons/fa";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// import { FaHandPointRight } from "react-icons/fa";

// function AboutUs() {
//   const membersData = [
//     {
//       img: "/zolo.jpg",
//       name: "Zoloo",
//       about: "person about",
//       ig: "https://www.instagram.com/zolushkazz#",
//       github: "https://github.com/Zolushkazz",
//     },
//     {
//       img: "/azaa.jpg",
//       name: "Tselmeg",
//       about: "person about",
//       ig: "https://www.instagram.com/tselmeg_0711#",
//       github: "https://github.com/Tsekutselmeg",
//     },
//     {
//       img: "/zolo.jpg",
//       name: "Zoloo",
//       about: "person about",
//       ig: "https://www.instagram.com/zolushkazz#",
//       github: "https://github.com/Zolushkazz",
//     },
//     {
//       img: "/azaa.jpg",
//       name: "Tselmeg",
//       about: "person about",
//       ig: "https://www.instagram.com/tselmeg_0711#",
//       github: "https://github.com/Tsekutselmeg",
//     },
//     {
//       img: "/zolo.jpg",
//       name: "Zoloo",
//       about: "person about",
//       ig: "https://www.instagram.com/zolushkazz#",
//       github: "https://github.com/Zolushkazz",
//     },
//     {
//       img: "/azaa.jpg",
//       name: "Tselmeg",
//       about: "person about",
//       ig: "https://www.instagram.com/tselmeg_0711#",
//       github: "https://github.com/Tsekutselmeg",
//     },
//     // Add other member data here
//   ];

//   return (
//     <ScrollArea className="md:w-[1490px] whitespace-nowrap rounded-md border my-[50px]">
//       <div className="flex md:w-max my-5 gap-[30px] object-fill p-[30px] text-white">
//         {membersData?.map((el, index) => {
//           const isMiddlePhoto = index === Math.floor(membersData.length / 4);
//           return (
//             <figure
//               key={index}
//               className={`shrink-0 border border-white p-[20px] rounded-sm ${
//                 isMiddlePhoto ? "transform scale-125" : "transform scale-75"
//               }`}
//             >
//               <div>
//                 <Image
//                   className="h-fit w-fit object-cover rounded-sm"
//                   src={el.img}
//                   alt=""
//                   width={400}
//                   height={400}
//                 />
//               </div>

//               <div className="gap-[55px]">
//                 <div className="text-[30px] items-center justify-center text-center">
//                   {el.name}
//                 </div>
//                 <div className="flex justify-end gap-3">
//                   <div>
//                     <Link href={el.ig} target="_blank">
//                       <BsInstagram className="text-[25px]" />
//                     </Link>
//                   </div>
//                   <div className="">
//                     <Link href={el.github} target="_blank">
//                       <FaGithub className="text-[25px]" />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </figure>
//           );
//         })}
//       </div>
//       <div className="text-[35px] ml-[50px] mb-[20px] text-white">
//         Scroll right <FaHandPointRight />
//       </div>
//       <ScrollBar orientation="horizontal" />
//     </ScrollArea>
//   );
// }

// export default AboutUs;
