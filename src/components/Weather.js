function Weather({ temp, city, cond, feel, error }) {
  return (
    <div className="weaher-box">
      {error && "Ведено невірну назву міста "}
      {city && temp && (
        <>
          <div className="city">{city.toUpperCase()}</div>
          <div className="temperature">{temp}&deg;C</div>
          <div className="condition">{cond}</div>
          <div>Відчувається {feel}&deg;C</div>
        </>
      )}
    </div>
  );
}

export default Weather;
