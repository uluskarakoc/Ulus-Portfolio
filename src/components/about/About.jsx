import "./about.scss";

function About() {
  return (
    <div className="about">
        <h1 className="text">About Me</h1>
      <div className="container">
        <div className="meText">
          <h1>Hi ich bin ULUS,</h1>
          <p>
            Ich bin ein ausgebildeter Full Stack Web Entwickler mit einer
            Leidenschaft für das Programmieren. Bevor ich meine Weiterbildung in
            Deutschland abgeschlossen habe, habe ich bereits eigenständig mit
            dem Erlernen des Programmierens begonnen und dabei meine Fähigkeiten
            kontinuierlich ausgebaut. Mit 2,5 Jahren Erfahrung als Lehrer in der
            Türkei und Kirgisistan konnte ich meine kommunikativen Fähigkeiten
            entwickeln und schätze die Bedeutung einer strukturierten
            Herangehensweise an Aufgaben. Diese Erfahrungen kombiniere ich nun
            mit meiner Leidenschaft für die Technologiebranche, um innovative
            Lösungen zu entwickeln. Ich bin offen für neue Herausforderungen,
            teamorientiert und stets bereit, mich weiterzuentwickeln. Ich freue
            mich auf die Möglichkeit, an neuen Projekten zu arbeiten und meine
            Fähigkeiten als Web Entwickler weiter zu vertiefen. Vielen Dank!
          </p>
        </div>
        <div className="image">
          <img src="./people.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
