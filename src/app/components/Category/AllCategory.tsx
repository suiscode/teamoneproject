import { SliderDemo } from "@/components/range";
import { Stack, Typography, Checkbox } from "@mui/material";
import { grey } from "@mui/material/colors";

const AllCategory = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const carMark = [
    {
      icon: (
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: grey[900],
            "&.Mui-checked": {
              color: grey[900],
            },
          }}
        />
      ),
      title: "Sedan",
    },
    {
      icon: (
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: grey[900],
            "&.Mui-checked": {
              color: grey[900],
            },
          }}
        />
      ),
      title: "Coupe",
    },
    {
      icon: (
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: grey[900],
            "&.Mui-checked": {
              color: grey[900],
            },
          }}
        />
      ),
      title: "Hatchback",
    },
    {
      icon: (
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: grey[900],
            "&.Mui-checked": {
              color: grey[900],
            },
          }}
        />
      ),
      title: "SUV",
    },
    {
      icon: (
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: grey[900],
            "&.Mui-checked": {
              color: grey[900],
            },
          }}
        />
      ),
      title: "Truck",
    },
    {
      icon: (
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: grey[900],
            "&.Mui-checked": {
              color: grey[900],
            },
          }}
        />
      ),
      title: "Camping vans",
    },
  ];
  const carCapacity = [
    {
      icon: (
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: grey[900],
            "&.Mui-checked": {
              color: grey[900],
            },
          }}
        />
      ),
      title: "2 person",
    },
    {
      icon: (
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: grey[900],
            "&.Mui-checked": {
              color: grey[900],
            },
          }}
        />
      ),
      title: "4 person",
    },
    {
      icon: (
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: grey[900],
            "&.Mui-checked": {
              color: grey[900],
            },
          }}
        />
      ),
      title: "7 person",
    },
    {
      icon: (
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: grey[900],
            "&.Mui-checked": {
              color: grey[900],
            },
          }}
        />
      ),
      title: "8 person",
    },
    {
      icon: (
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: grey[900],
            "&.Mui-checked": {
              color: grey[900],
            },
          }}
        />
      ),
      title: "15+ person",
    },
  ];
  return (
    <Stack
      width={"15%"}
      height={"100%"}
      justifyContent={"center"}
      paddingX={2}
      fontSize={18}
      border={"1px solid #d9d9d9"}
      borderRadius={"10px"}
    >
      <Typography fontSize={20} color={"#595959"}>
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
      <Stack pt={20}>
        <Stack fontSize={20} color={"#595959"}>
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
      <Stack mt={10} justifyContent={"center"} pl={4}>
        Price
        <SliderDemo />
      </Stack>
    </Stack>
  );
};

export default AllCategory;
