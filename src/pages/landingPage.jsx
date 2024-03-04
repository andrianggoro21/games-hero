import { Box } from "@chakra-ui/react";
import Banner from "../components/banner/banner";
import Navbar from "../components/navbar/navbar";
import ListHero from "../components/list-hero/listHero";
import Footer from "../components/footer/footer";
import { useEffect, useState } from "react";
import { useParams, } from "react-router-dom";

const LandingPage = () => {
  const [selectedRole, setSelectedRole] = useState("All");
  const { role } = useParams();

  useEffect(() => {
    if (role) {
      setSelectedRole(role);
    }
  }, [role]);

  return (
    <Box maxW="100vw" minH="100vh" bgColor="#191919">
      <Banner />
      <Navbar />
      <ListHero selectedRole={selectedRole} />
      <Footer />
    </Box>
  );
};

export default LandingPage;
