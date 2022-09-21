import Image from "next/image";
import classes from "./hero.module.css";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/majid.jfif" height={300} width={300} />
      </div>
      <h1>Hi, Im Majid</h1>
      <p>I blog about web development</p>
    </section>
  );
}

export default Hero;
