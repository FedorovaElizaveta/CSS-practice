import css from "./Hexagon.module.css";

const Hexagon1 = () => <div className={css.hexagon}></div>;

const Hexagon = () => {
  const rows = Array(10)
    .fill()
    .map((_, index) => (
      <div className={css.row} key={index}>
        {Array(16)
          .fill()
          .map((_, i) => (
            <Hexagon1 key={i} />
          ))}
      </div>
    ));

  return <div className={css.container}>{rows}</div>;
};

export default Hexagon;
