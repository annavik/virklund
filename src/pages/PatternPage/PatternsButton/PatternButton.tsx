import { useNavigate } from "react-router";
import { ArrowButton } from "../../../components/ArrowButton/ArrowButton";

export const PatternsButton = () => {
  const navigate = useNavigate();

  return (
    <ArrowButton
      label="Alla mönster"
      onClick={() => navigate("/patterns")}
      plain
      reverse
    />
  );
};
