import { cn } from "@/lib/utils";
import { Slider } from "@mui/material";

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100000000}
      step={10000000}
      className={cn("w-[60%]", className)}
      {...props}
      style={{ color: "#262626" }}
    />
  );
}
