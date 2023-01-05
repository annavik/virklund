import { useNavigate } from "react-router";
import { ArrowButton } from "../../../components/ArrowButton/ArrowButton";
import { Button } from "../../../components/Button/Button";

export const PatternsButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      label="Fler mönster"
      theme="primary"
      onClick={() => navigate("/patterns")}
    />
  );
};

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <ArrowButton label="Tillbaka" onClick={() => navigate(-1)} plain reverse />
  );
};
