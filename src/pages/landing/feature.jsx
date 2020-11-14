export const FeatureCard = ({item}) => {
  const {title, icon, text} = item;
  return (
    <div
      style={{
        width: "45%",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px 0",
      }}
    >
      <img
        src={icon}
        alt={icon}
        style={{width: "50px", height: "50px", margin: "15px"}}
      />
      <div
        style={{
          fontWeight: 900,
          color: "#595959",
          fontSize: "1.75rem",
          marginBottom: "20px",
          fontFamily: "Questrial, Sans-serif",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontWeight: "normal",
          color: "#7a7a7a",
          fontSize: "1rem",
          padding: "0 20px",
          lineHeight: 1.5,
          textAlign: "center",
        }}
      >
        {text}
      </div>
    </div>
  );
};
