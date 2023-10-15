export const Badge = {
  baseStyle: {
    _focus: "",
  },
  sizes: {
    node: {
      bg: "gray.700",
      color: ["gray.200", null, "gray.200"],

      // h: ["2em", "2em", "3.5em", "3.5em"],
      h: "2.5em",
      w: "2.5em",
      // w: ["2em", "2em", "3.5em", "3.5em"],

      boxShadow: "xl",
      border: "2px",
      rounded: "50%",

      pos: "absolute",
      transform: "auto",
      translateX: "-50%",
      translateY: "-50%",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      textTransform: "none",
      fontSize: ["0.6em", "0.6em", "1em", "1em", "1em", "1.1em"],
      fontWeight: "500",
    },
  },
  variants: {
    q1: {
      top: "50%",
      left: "1%",

      borderColor: "blue.300",
    },
    q2: {
      top: "75%",
      left: "10%",

      borderColor: "purple.300",
    },
    q3: {
      top: "75%",
      left: "25%",

      borderColor: "purple.300",
    },
    q4: {
      top: "75%",
      left: "40%",

      borderColor: "purple.300",
    },
    q5: {
      top: "75%",
      left: "55%",

      borderColor: "purple.300",
    },
    q6: {
      top: "90%",
      left: "52%",

      borderColor: "purple.300",
    },
    q7: {
      top: "85%",
      left: "70%",

      borderColor: "purple.300",
    },
    q8: {
      top: "50%",
      left: "30%",

      borderColor: "purple.300",
    },
    q9: {
      top: "50%",
      left: "45%",

      borderColor: "purple.300",
    },
    q10: {
      top: "30%",
      left: "40%",

      borderColor: "purple.300",
    },
    q11: {
      top: "38%",
      left: "55%",

      borderColor: "purple.300",
    },
    q12: {
      top: "18%",
      left: "55%",

      borderColor: "purple.300",
    },
    q13: {
      top: "18%",
      left: "66%",

      borderColor: "purple.300",
    },
    q14: {
      top: "18%",
      left: "77%",

      borderColor: "purple.300",
    },
    q15: {
      top: "18%",
      left: "88%",

      borderColor: "purple.300",
    },
    q16: {
      top: "18%",
      left: "99%",

      borderColor: "purple.300",
    },
    q17: {
      top: "50%",
      left: "70%",

      borderColor: "purple.300",
    },
    q18: {
      top: "75%",
      left: "88%",

      borderColor: "teal.300",
    },
    q19: {
      top: "45%",
      left: "84%",

      borderColor: "teal.300",
    },
    T: {
      top: "62%",
      left: "100%",

      borderColor: "pink.300",
    },
    
  },
  defaultProps: {
    size: "node",
  },
};
