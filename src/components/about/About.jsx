import "./about.scss";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="about">
      <h1 className="text">About <span>Me</span> </h1>
      <div className="container">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1 }}
          whileHover={{ scale: 1.2 }}
          className="meText"
        >
          <h1>Hi ich bin ULUS,</h1>
          <p>
            Ich habe mein Hobby, Photoshop und Fotografie, das ich in meinen
            20ern begonnen habe, durch einen einjährigen Weiterbildungskurs
            erfolgreich abgeschlossen und bin jetzt als Full Stack Webentwickler
            an einem schönen Punkt angelangt. Mit dem Spielen von Stil, Farben
            und Animationen einer Webseite sowie dem Verarbeiten der an die
            Backend gesendeten Informationen, um sie dem Benutzer nahtlos
            zurückzugeben, empfinde ich eine Freude, die vergleichbar ist mit
            dem stundenlangen Betrachten eines Gemäldes durch einen Maler.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="image"
        >
          <img src="./code2.jpg" alt="" />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
