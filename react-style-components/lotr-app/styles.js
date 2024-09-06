import { createGlobalStyle } from "styled-components";
import { Lora } from "@next/font/google";

// Definiere die Lora Schriftart
const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

// Globale Stile anwenden
export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${lora.style.fontFamily}, serif;
  }
`;
