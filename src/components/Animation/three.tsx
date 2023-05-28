import ProductCard from "../ProductCard";
import FundoInfo from "../FundoInfo";
import ArtistCard from "../ArtistCard";
import { Box } from "@mui/material";

export default function Three() {
  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: " 0 auto",
        overflowX: "auto",
      }}
      gap={"120px"}
    >
      <ProductCard />
      <FundoInfo />
      <ArtistCard />
    </Box>
  );
}
