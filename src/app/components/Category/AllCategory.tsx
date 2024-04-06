"use client";

// import { SliderDemo } from "@/components/range";
// import { Stack, Typography } from "@mui/material";
// import { grey } from "@mui/material/colors";
// import { makeStyles } from "@mui/styles";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { toast } from "@/components/ui/use-toast";

// const useStyles = makeStyles({
//   root: {
//     "&$checked": {
//       color: grey[900],
//     },
//   },
//   checked: {},
// });

// const AllCategory = () => {
//   const classes = useStyles();
//   const label = { inputProps: { "aria-label": "Checkbox demo" } };

//   const carMark = [
//     {
//       id: "Sedan",
//       label: "Sedan",
//     },
//     {
//       id: "Coupe",
//       label: "Coupe",
//     },
//     {
//       id: "Hatchback",
//       label: "Hatchback",
//     },
//     {
//       id: "SUV",
//       label: "SUV",
//     },
//     {
//       id: "Truck",
//       label: "Truck",
//     },
//     {
//       id: "Camping vans",
//       label: "Capmping vans",
//     },
//   ];
//   const carCapacity = [
//     {
//       id: "2 people",
//       label: "2 people",
//     },
//     {
//       id: "4 people",
//       label: "4 people",
//     },
//     {
//       id: "7 people",
//       label: "7 people",
//     },
//     {
//       id: "8 people",
//       label: "8 people",
//     },
//     {
//       id: "15+ people",
//       label: "15+ people",
//     },
//   ];
//   const FormSchema = z.object({
//     carMark: z.array(z.string()).refine((value) => value.some((item) => item), {
//       message: "You have to select at least one item.",
//     }),
//   });

//   function onSubmit(data: z.infer<typeof FormSchema>) {
//     toast({
//       title: "You submitted the following values:",
//       description: (
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     });
//   }
//   return (
//     <Stack
//       width={"15%"}
//       height={"100%"}
//       justifyContent={"center"}
//       paddingX={2}
//       fontSize={18}
//       border={"1px solid #d9d9d9"}
//       borderRadius={"10px"}
//     >
//       <Typography fontSize={20} color={"#595959"}>
//         Type
//       </Typography>
//       {carMark.map(({ id }, index) => {
//         return (
//           <Stack key={index}>
//             <div className="flex items-center pr-16 ">
//               <Checkbox />
//               {id}
//             </div>
//           </Stack>
//         );
//       })}
//       <Stack pt={20}>
//         <Stack fontSize={20} color={"#595959"}>
//           Capacity
//         </Stack>
//         {carCapacity.map(({ id }, index) => {
//           return (
//             <Stack key={index}>
//               <div className="flex items-center pr-16 ">{id}</div>
//             </Stack>
//           );
//         })}
//       </Stack>
//       <Stack mt={10} justifyContent={"center"} pl={4}>
//         Price
//         <SliderDemo />
//       </Stack>
//     </Stack>
//   );
// };

// export default AllCategory;

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

const items = [
  {
    id: "Sedan",
    label: "Sedan",
  },
  {
    id: "Coupe",
    label: "Coupe",
  },
  {
    id: "Hatchback",
    label: "Hatchback",
  },
  {
    id: "Truck",
    label: "Truck",
  },
  {
    id: "SUV",
    label: "SUV",
  },
  {
    id: "Camping vans",
    label: "Camping vans",
  },
] as const;

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export function AllCategory() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["recents", "home"],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 h-[900px] sticky top-[110px] p-4 rounded-md"
      >
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Filter</FormLabel>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            className="bg-white w-6 h-6"
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal text-lg">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg">
          Search
        </Button>
      </form>
    </Form>
  );
}
