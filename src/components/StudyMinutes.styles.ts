import { styled } from "@mui/system";
import { numberInputClasses } from "@mui/base/Unstable_NumberInput";
import { Theme } from "@mui/material/styles";

export const StyledInputRoot = styled("div")(
  ({ theme }: { theme: Theme }) => `
  font-family: ${theme.typography.fontFamily};
  font-weight: 400;
  border-radius: 8px;
  color: ${theme.palette.text.primary};
  background: ${theme.palette.background.default};
  border: 1px solid ${theme.palette.divider};
  box-shadow: 0 2px 4px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
  };
  display: grid;
  grid-template-columns: 1fr 19px;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
  column-gap: 8px;
  padding: 4px;

  &.${numberInputClasses.focused} {
    border-color: ${theme.palette.primary.light};
    box-shadow: 0 0 0 3px ${theme.palette.primary.light};
  }

  &:hover {
    border-color: ${theme.palette.primary.main};
  }

  &:focus-visible {
    outline: 0;
  }
`
);

export const StyledInputElement = styled("input")(
  ({ theme }: { theme: Theme }) => `
  font-size: 0.875rem;
  font-family: ${theme.typography.fontFamily};
  font-weight: 400;
  line-height: 1.5;
  grid-column: 1/2;
  grid-row: 1/3;
  color: ${theme.palette.text.primary};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 8px 12px;
  outline: 0;
`
);

export const StyledButton = styled("button")(
  ({ theme }: { theme: Theme }) => `
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  appearance: none;
  padding: 0;
  width: 19px;
  height: 19px;
  font-family: system-ui, sans-serif;
  font-size: 0.875rem;
  line-height: 1;
  box-sizing: border-box;
  background: ${theme.palette.background.paper};
  border: 0;
  color: ${theme.palette.text.primary};
  transition: all 120ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: pointer;
    color: #FFF;
    background: ${theme.palette.primary.main};
    border-color: ${theme.palette.primary.dark};
  }

  &.${numberInputClasses.incrementButton} {
    grid-column: 2/3;
    grid-row: 1/2;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border: 1px solid ${theme.palette.divider};
    border-bottom: 0;
    background: ${theme.palette.background.paper};
    color: ${theme.palette.text.primary};

    &:hover {
      background: ${theme.palette.primary.main};
      border-color: ${theme.palette.primary.dark};
      color: #FFF;
    }
  }

  &.${numberInputClasses.decrementButton} {
    grid-column: 2/3;
    grid-row: 2/3;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 1px solid ${theme.palette.divider};
    background: ${theme.palette.background.paper};
    color: ${theme.palette.text.primary};
  }

  & .arrow {
    transform: translateY(-1px);
  }
`
);
