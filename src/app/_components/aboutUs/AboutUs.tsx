// import React from "react";
// import { Stack, Typography } from "@mui/material";
// import Image from "next/image";
// import Link from "next/link";

// function AboutUs() {
//   const membersData = [
//     {
//       img: "https://instagram.fuln2-2.fna.fbcdn.net/v/t1.15752-9/433042211_1222184738744657_1399960820989488103_n.jpg?stp=dst-jpg_s403x403&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GeQLLaAHDbgAb5lLztL&_nc_ht=instagram.fuln2-2.fna&oh=03_AdUESHuPpqsOAay7cFbq1z66wiSBb4CF_z9SERDNGlRDfg&oe=66358676",
//       title: "HomePage, Category",
//       hobby: "BILLARD,SHOUDAKH",
//       name: "Zoloo",
//       about: "person about",
//       socials: "https://www.instagram.com/zolushkazz#",
//     },
//     {
//       img: "https://media.zigcdn.com/media/model/2024/Feb/toyota-camry_600x400.jpg",
//       title: "Header, Footer, Review",
//       hobby: "PUBG",
//       name: "Tselmeg",
//       about: "person about",
//       socials: "https://www.instagram.com/tselmeg_0711#",
//     },
//     {
//       img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/434938764_1386237965592835_2099962084126969584_n.jpg?stp=dst-jpg_s552x414&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=H3iCAb48TCcAb4_Gko4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdWxBDY5FjBKZ-Fr7Iwn5tsOrOaskKhyh7M-IyXYenAl3Q&oe=663583DA",
//       title: "Login, SignUp",
//       hobby: "ML, BASKETBALL",
//       name: "Ganaa",
//       about: "person about",
//       socials: "https://www.instagram.com/_tulgagn#",
//     },
//     {
//       img: "https://media.zigcdn.com/media/model/2024/Feb/toyota-camry_600x400.jpg",
//       title: "CartDetail, Members",
//       hobby: "ML, BASKETBALL",
//       name: "Bilegt",
//       about: "person about",
//       socials: "https://www.instagram.com/bblgttt#",
//     },
//     {
//       img: "https://media.zigcdn.com/media/model/2024/Feb/toyota-camry_600x400.jpg",
//       title: "Admin Dashboard",
//       hobby: "DOTA2",
//       name: "Tuguu",
//       about: "person about",
//       socials: "https://www.instagram.com/sb2014rtzn1#",
//     },
//     {
//       img: "https://media.zigcdn.com/media/model/2024/Feb/toyota-camry_600x400.jpg",
//       title: "Payment",
//       hobby: "DOTA2 , CS ",
//       name: "Garid",
//       about: "Person About",
//       socials: "https://www.instagram.com/gar1da#",
//     },
//   ];
//   return (
//     <Stack direction="row" sx={{ width: "3000", height: "730px", my: "50px" }}>
//       {membersData?.map((el, index) => {
//         return (
//           <Stack
//             sx={{
//               border: "1px solid red",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "25px",
//               bgcolor: "#D2D2D2",
//               scale: "0.95",
//               borderRadius: "5px",
//             }}
//             key={index}
//           >
//             <Image
//               src={el.img}
//               alt=""
//               width={300}
//               height={300}
//               className="rounded-[100%]"
//             />

//             <Typography sx={{ color: "red", fontSize: "23px" }}>
//               {el.name}
//             </Typography>

//             <Typography
//               sx={{
//                 bgcolor: "white",
//                 borderRadius: "5px",
//                 p: "5px",
//                 color: "black",
//               }}
//             >
//               {el.title}
//             </Typography>

//             <Typography sx={{ color: "black" }}>{el.about}</Typography>
//             <Typography>{el.hobby}</Typography>
//             <Link className="bg-white rounded-lg p-2" href={el.socials}>
//               Social Link
//             </Link>
//           </Stack>
//         );
//       })}
//     </Stack>
//   );
// }

// export default AboutUs;
