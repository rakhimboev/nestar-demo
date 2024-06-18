import { Container, Stack } from "@mui/material";
import { useRouter } from "next/router";

const PropertyDetail = () => {
  const router = useRouter(),
  {productId} = router.query
  return <Container>PROPERTY DETAIL {productId} </Container>;
};

export default PropertyDetail;