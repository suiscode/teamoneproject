import { SliderDemo } from "@/components/range";
import { Stack, Typography, Checkbox } from "@mui/material";

const AllCategory = () => {
  const carMark = [
    { icon: <Checkbox sx={{ color: "#f2f2f2" }} />, title: "Sedan" },
    { icon: <Checkbox sx={{ color: "#f2f2f2" }} />, title: "Coupe" },
    { icon: <Checkbox sx={{ color: "#f2f2f2" }} />, title: "Hatchback" },
    { icon: <Checkbox sx={{ color: "#f2f2f2" }} />, title: "SUV" },
    { icon: <Checkbox sx={{ color: "#f2f2f2" }} />, title: "Truck" },
    { icon: <Checkbox sx={{ color: "#f2f2f2" }} />, title: "Camping vans" },
  ];
  const carCapacity = [
    { icon: <Checkbox sx={{ color: "#f2f2f2" }} />, title: "2 person" },
    { icon: <Checkbox sx={{ color: "#f2f2f2" }} />, title: "4 person" },
    { icon: <Checkbox sx={{ color: "#f2f2f2" }} />, title: "7 person" },
    { icon: <Checkbox sx={{ color: "#f2f2f2" }} />, title: "8 person" },
    { icon: <Checkbox sx={{ color: "#f2f2f2" }} />, title: "15+ person" },
  ];
  return (
    <Stack
      width={"15%"}
      height={"100%"}
      justifyContent={"center"}
      paddingLeft={6}
      fontSize={18}
    >
      <Typography fontSize={20} color={"#cccccc"}>
        Type
      </Typography>
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

      <Stack pt={20} sx={{ bgcolor: "white" }}>
        <Stack fontSize={20} color={"#cccccc"}>
          Capacity
        </Stack>
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
      <Stack mt={10}>
        <SliderDemo />
      </Stack>
    </Stack>
  );
};

export default AllCategory;
