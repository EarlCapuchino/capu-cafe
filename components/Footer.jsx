import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Each bean is harvested with outmost care. 
            We serve with our warm hearts and great delight. Capu cafe is more than just the coffee. 
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR CAFES</h1>
          <p className={styles.text}>
            #124 Masili, Calamba, 
            <br /> Laguna, 4027
            <br /> (604) 335-1910
          </p>
          <p className={styles.text}>
            Franceville Village, Bulihan, Silang
            <br /> Cavite, 4118
            <br /> (621) 9934-2213
          </p>
          <p className={styles.text}>
            9019, Mahogany Village, Tagaytay
            <br /> Cavite, 4120
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
            UPLB College, Los Baños.
            <br /> Laguna, 4030
            <br /> (604) 961-6081
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 7:00 – 23:00
          </p>
          <p className={styles.text}>
            SATURDAY
            <br /> 7:00 – 20:00
          </p>
          <p className={styles.text}>
            SUNDAY
            <br /> closed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
