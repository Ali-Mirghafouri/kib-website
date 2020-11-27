export const getStyle = (props) => {
  const [width, height, type] = [...props];
  let fs18 = width - 330;
  if (fs18 < 0) {
    fs18 = 20;
  } else {
    fs18 = 12 + fs18 / 20;
  }
  if (fs18 > 32) {
    fs18 = 32;
  }
  let pd = (width - 880) / 20;
  if (pd < 0) pd = 0;

  let fs = width - 1120;
  if (fs < 0) {
    fs = 3;
  } else {
    fs = 1.5;
  }
  switch (type) {
    case "Carousel_slides_text":
      let csw = width - 100;
      if (csw < 200) {
        csw = 150;
      } else {
        csw = 150 + csw / 5;
      }
      if (csw > 440) csw = 440;

      return {
        color: "white",
        display: "flex",
        flexDirection: "column",
        fontSize: `${fs18}px`,
        fontFamily: "Questrial, Sans-serif",
        fontWeight: "500",
        height: "100%",
        justifyContent: "center",
        // marginBottom: "35vh",
        // marginBottom: "25vh",
        textShadow: "2px 2px 4px #0009",
        marginRight: "30vw",
        width: `${csw}px`,
      };
    case "subHeading_text":
      return {
        marginTop: "auto",
        marginBottom: "10vh",
        fontSize: `${fs18}px`,
        padding: "0 10vw",
      };
    case "navbarHover":
      return {
        textDecoration: "none",
        color: "#fff",
        padding: `0 ${10 + pd}px`,
        fontSize: `${fs}vw`,
        backgroundColor: "#dddddd66",
        borderRadius: "8px",
        transition: "background-color 0.2s ease",
      };
    case "navbar":
      return {
        textDecoration: "none",
        color: "#fff",
        padding: `0 ${10 + pd}px`,
        fontSize: `${fs}vw`,
      };
    case "Carousel_slides_button":
      let bh = width - 330;
      if (bh < 0) bh = 0;
      bh = 29 + bh / 140;
      if (bh > 39) bh = 39;

      let bpd = (width - 400) / 170;
      if (bpd < 0) bpd = 0;
      if (bpd > 8) bpd = 8;
      return {
        alignSelf: "flex-start",
        height: `${bh}px`,
        width: "auto",
        borderRadius: `${10 + bpd}px`,
        border: "none",
        marginTop: "30px",
        marginRight: "10%",
        padding: `0px ${16 + bpd}px`,
        backgroundColor: "#fd0000",
        color: "white",
        fontSize: `${12 + bpd}px`,
        fontWeight: "bold",
        fontFamily: "Questrial, Sans-serif",
        textShadow: "2px 2px 4px #0009",
      };
    case "Carousel_slides":
      let carh = width - 400;
      if (carh < 0) carh = 0;
      carh = 400 + carh / 3.4;
      if (carh > 600) carh = height - 10;
      return {
        overflowY: "visible",
        // height: height.toString().concat("px"),
        display: "flex",
        flexDirection: "column",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingLeft: "10vw",
        height: `${carh}px`,
      };
    default:
      return {};
  }
};
