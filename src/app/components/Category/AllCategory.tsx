import { Stack, Typography, Checkbox } from "@mui/material";
import Divider from "@mui/material/Divider";

const Category = () => {
  const carMark = [
    { icon: <Checkbox sx={{ color: "#f2f2f2" }} />, title: "Sedan" },
    { icon: <Checkbox sx={{ color: "#f2f2f2" }} />, title: "Coupe" },
    { icon: <Checkbox sx={{ color: "#f2f2f2" }} />, title: "Hatchback" },
    { icon: <Checkbox sx={{ color: "#f2f2f2" }} />, title: "Camping vans" },
    // { icon: <Checkbox />, title: "" },
  ];
  const carCapacity = [
    { icon: <Checkbox sx={{ color: "#f2f2f2" }} />, title: "2 person" },
    { icon: <Checkbox sx={{ color: "#f2f2f2" }} />, title: "4 person" },
    { icon: <Checkbox sx={{ color: "#f2f2f2" }} />, title: "7 person" },
    { icon: <Checkbox sx={{ color: "#f2f2f2" }} />, title: "8 person" },
    { icon: <Checkbox sx={{ color: "#f2f2f2" }} />, title: "15+ person" },
  ];
  return (
    <Stack width={"40%"} height={"100%"} direction={"row"}>
      <Stack pl={4}>
        <Typography>Type</Typography>

        {carMark.map(({ icon, title }, index) => {
          return (
            <Stack key={index}>
              <div className="flex items-center pr-16 ">
                {icon}
                {title}
              </div>
            </Stack>
          );
        })}
      </Stack>
      <Stack pl={4} pt={20}>
        <Stack>Capacity</Stack>
        {carCapacity.map(({ icon, title }, index) => {
          return (
            <Stack key={index}>
              <div className="flex items-center pr-16 ">
                {icon}
                {title}
              </div>
            </Stack>
          );
        })}
      </Stack>
      <Divider orientation={"vertical"} flexItem />
    </Stack>
  );
};

export default Category;
