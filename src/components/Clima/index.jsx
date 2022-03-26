import styles from "./clima.module.scss";
import React, { useState } from "react";

export default function Clima() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=48bc61aaf6e44d1906296cbfe7da019b`;

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dataAtual = (d) => {
    const meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    const dias = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sabado",
    ];

    let dia = dias[d.getDay()];
    let nDia = d.getDate();
    let mes = meses[d.getMonth()];
    let ano = d.getFullYear();

    return `${dia}, ${nDia} de ${mes}, ${ano}`;
  };

  return (
    <div className={styles.component}>
      <div className={styles.pesquisaBox}>
        <input
          className={styles.pesquisar}
          placeholder="Faça uma busca..."
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        ></input>
      </div>

      {typeof weather.main != "undefined" ? (
        <div className={styles.flexContainer}>
          <div className={styles.country}>
            <p className={styles.location}>
              {weather.name}, {weather.sys.country}
            </p>
            <p className={styles.date}>{dataAtual(new Date())}</p>
          </div>

          <div className={styles.tempAtual}>
            <p>Temperatura atual:</p>
            <p className={styles.temp}>{Math.round(weather.main.temp)}°C</p>
            <div className={styles.weatherDescription}>
              {weather.weather[0].description}
            </div>
          </div>

          <div className={styles.weatherBox}>
            <div className={styles.tempVar}>
              <p>T. minima:</p>
              <p id={styles.pBlue}>{Math.round(weather.main.temp_min)}°C</p>
            </div>
            <div className={styles.tempVar}>
              <p>T. máxima:</p>
              <p id={styles.pRed}>{Math.round(weather.main.temp_max)}°C</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
