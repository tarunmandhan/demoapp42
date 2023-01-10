import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/Contact");
  };
  return (
    <>
      <h1>About tarun </h1>
      <button onClick={() => goToContact()}>go to Contact page</button>
    </>
  );
};
export default About;
