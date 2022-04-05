import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Experience the native coffee of Cavite</h1>
      <p className={styles.desc}>
        Capu cafe is designed to cater your daily coffee needs and satisfy your cravings.
        The shop indulges in the fusion of local coffee bean providers from organic farms of
        Tagaytay, Silang, and Batangas. International flavors are harvested from Brazil, Peru, and
        other parts of the South America. Experience the extraordinary cafe today.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
