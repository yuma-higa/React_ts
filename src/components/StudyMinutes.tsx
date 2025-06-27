import * as React from "react";
import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps,
} from "@mui/base/Unstable_NumberInput";
import {
  StyledInputRoot,
  StyledInputElement,
  StyledButton,
} from "./StudyMinutes.styles";

type Props = {
  time: number;
  setTime: (time: number) => void;
};

const CustomNumberInput = React.forwardRef(function CustomNumberInput(
  props: NumberInputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInputElement,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: "▴",
        },
        decrementButton: {
          children: "▾",
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

const StudyMinutes: React.FC<Props> = ({ time, setTime }) => {
  const handleChange = (_: any, val: number | null) => {
    setTime(val ?? 0);
  };

  return (
    <CustomNumberInput
      value={time}
      onChange={handleChange}
      aria-label="勉強時間"
      min={0}
    />
  );
};

export default StudyMinutes;
