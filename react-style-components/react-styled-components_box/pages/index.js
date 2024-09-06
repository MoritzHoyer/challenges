import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents/BoxWithStyleComponents.js";

export default function HomePage() {
  return (
    <div style={{ display: "flex" }}>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents $isBlack={false} />
      <BoxWithStyledComponents $isBlack={true} />
    </div>
  );
}
