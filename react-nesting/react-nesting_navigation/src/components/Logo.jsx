import logo from "../assets/logo.jpg";
import Image from "./Image";

export default function Logo() {
  return (
    <a href="#">
      <Image src={logo} alt="logo" />
    </a>
  );
}
