import { chakra, HTMLChakraProps, useColorModeValue } from "@chakra-ui/react";

export const Logo: React.FC<HTMLChakraProps<"svg">> = (props) => {
  const color = useColorModeValue("#231f20", "#fff");
  return (
    <span
      style={{
        boxSizing: "border-box",
        display: "inline-block",
        overflow: "hidden",
        width: "initial",
        height: "initial",
        background: "none",
        opacity: 1,
        border: 0,
        margin: 0,
        padding: 0,
        position: "relative",
        maxWidth: "100%",
      }}
    >
      <span
        style={{
          boxSizing: "border-box",
          display: "block",
          overflow: "hidden",
          width: "initial",
          height: "initial",
          background: "transparent",
          opacity: 1,
          border: 0,
          margin: 0,
          padding: 0,
          position: "relative",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            color: "#E65C55",
            transition: "color 2s",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: 500,
            letterSpacing: "-1px",
          }}
        >
          SARVIN
        </div>
      </span>
    </span>
  );
};
