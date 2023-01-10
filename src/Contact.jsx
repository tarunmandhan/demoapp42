import { useNavigate } from "react-router-dom";

const Contact = () => {
  const abc = useNavigate();

  const goToHome = () => {
    abc("/");
  };
  return (
    <>
      <h1>Contact Pawan</h1>
      <button onClick={goToHome}> go to Home page </button>
    </>
  );
};

export default Contact;
