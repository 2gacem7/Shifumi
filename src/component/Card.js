import "./Card.css";
import isMobileScreen from "../isMobile";
export function Card(props) {
  const isMobile = isMobileScreen();
  const width = isMobile ? "200" : "400";
  const height = isMobile ? "120" : "300";
  return (
    <>
      <img src={props.img} alt={props.img} width={width} height={height} />
    </>
  );
}
