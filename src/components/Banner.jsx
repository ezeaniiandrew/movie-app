import { Sheet } from "@mui/joy";
import Poster from "../assets/Poster.png";

function Banner() {
  return (
    <Sheet
      variant="plain"
      sx={{ backgroundImage: `url(${Poster})`, height: "600px" }}
    >
      Banner
    </Sheet>
  );
}

export default Banner;
