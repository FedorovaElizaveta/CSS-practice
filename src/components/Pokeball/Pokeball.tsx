import { useLocation, useNavigate } from "react-router-dom";
import css from "./Pokeball.module.css";

const Pokeball = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from || "/";

  return (
    <div className={css.container}>
      <button onClick={() => navigate(fromPage)} className={css.backBtn}>
        Back
      </button>
      <div className={css.pokeball}></div>
    </div>
  );
};

export default Pokeball;
