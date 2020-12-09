export const getStyle = (props) => {
  const [width, height, type] = [...props]
  let fs18 = width - 330
  if (fs18 < 0) {
    fs18 = 20
  } else {
    fs18 = 12 + fs18 / 20
  }
  if (fs18 > 32) {
    fs18 = 32
  }
  let pd = (width - 880) / 20
  if (pd < 0) pd = 0

  let fs = width - 1120
  if (fs < 0) {
    fs = 2.5
  } else {
    fs = 1.1
  }
  let featureS = (width - 400) / 1100
  if (featureS < 0) {
    featureS = 0
  }
  featureS += 1.5
  if (featureS > 2.5) featureS = 2.5

  let featureS2 = (featureS - 1.5) * 1.75 + 0.8
  if (featureS2 > 2.5) featureS2 = 2.5

  switch (type) {
    case "Carousel_slides_text":
      let csw = width - 100
      if (csw < 200) {
        csw = 150
      } else {
        csw = 150 + csw / 5
      }
      if (csw > 440) csw = 440

      return {
        color: "white",
        display: "flex",
        flexDirection: "column",
        fontSize: `${fs18}px`,
        fontFamily: "Questrial, Sans-serif",
        fontWeight: "500",
        height: "100%",
        justifyContent: "center",
        textShadow: "2px 2px 4px #0009",
        marginRight: "30vw",
        width: `${csw}px`,
      }
    case "subHeading_text":
      return {
        marginTop: "auto",
        marginBottom: "10vh",
        fontSize: `${fs18}px`,
        padding: "0 10vw",
      }
    case "navbarHover":
      return {
        textDecoration: "none",
        color: "block",
        // padding: `0 ${10 + pd}px`,
        fontSize: `${fs}vw`,
        backgroundColor: "#dddddd66",
        borderRadius: "8px",
        transition: "background-color 0.2s ease",
        fontWeight: "bold",
      }

    case "navbar":
      return {
        textDecoration: "none",
        color: "black",
        fontSize: `${fs}vw`,
        fontWeight: "bold",
      }

    case "Carousel_slides_button":
      let bh = width - 330
      if (bh < 0) bh = 0
      bh = 29 + bh / 140
      if (bh > 39) bh = 39
      let bpd = (width - 400) / 170
      if (bpd < 0) bpd = 0
      if (bpd > 8) bpd = 8
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
      }

    case "Carousel_slides":
      let carh = width - 400
      if (carh < 0) carh = 0
      carh = 400 + carh / 3.4
      if (carh > 600) carh = height - 10
      return {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingLeft: "10vw",
        height: `${carh}px`,
        maxHeight: `${carh}px`,
      }

    case "featureTitleStyle":
      return {
        fontWeight: 900,
        color: "#595959",
        fontSize: `${featureS2}rem`,
        marginBottom: "20px",
        fontFamily: "Questrial, Sans-serif",
        textAlign: "center",
      }

    case "featureTextStyle":
      let feafs = featureS / 2.3
      if (feafs < 0.6) feafs = 0.6
      if (feafs > 1) feafs = 1
      return {
        fontWeight: "normal",
        color: "#7a7a7a",
        fontSize: `${feafs}rem`,
        padding: "0 20px",
        lineHeight: 1.5,
        textAlign: "center",
      }
    case "topHeading":
      return {
        fontSize: `${featureS}rem`,
        color: "#595959",
        textAlign: "center",
        margin: width < 600 ? "30px 0 5px 0" : "100px 0 50px 0",
        fontFamily: "Questrial, Sans-serif",
        fontWeight: 900,
      }

    case "featureIconStyle":
      let iw = (width - 400) / 32
      if (iw < 0) iw = 0
      iw += 25
      return {
        width: `${iw}px`,
        height: `${iw}px`,
        margin: "15px",
      }

    case "our_clients_content":
      return {
        display: "flex",
        columnGap: "25vw",
        marginBottom: "70px",
        alignItems: "center",
      }

    case "clientImageWidth":
      let clientImageWidth = width - 400
      if (clientImageWidth < 0) clientImageWidth = 0
      clientImageWidth += clientImageWidth / 8
      if (clientImageWidth > 200) clientImageWidth = 200
      if (clientImageWidth < 100) clientImageWidth = 100
      return clientImageWidth
    case "about_us_text":
      return {
        textAlign: "center",
        color: "#595959",
        fontFamily: "Questrial, Sans-serif",
        fontWeight: 900,
        fontSize: `${featureS2 + 0.05}rem`,
        marginTop: "30px",
        marginBottom: "2vh",
      }

    case "contact_us_button":
      return {
        width: "100%",
        height: 40,
        marginTop: "20px",
        backgroundColor: "#fd0000",
        border: "none",
        borderRadius: "4px",
        outline: "none",
        color: "#FFF",
        cursor: "pointer",
        fontFamily: "Questrial, Sans-serif",
        fontSize: "1rem",
        fontWeight: 600,
      }
    case "contact_us_input":
      return {
        minWidth: "100px",
        width: "100%",
        flex: 1,
        minHeight: "40px",
        height: "40px",
        boxSizing: "border-box",
        padding: "0 20px",
        fontFamily: "Questrial, Sans-serif",
        fontWeight: 600,
      }
    case "contact_us_textarea":
      return {
        resize: "none",
        width: "100%",
        height: 120,
        boxSizing: "border-box",
        padding: "20px",
        textAlign: "start",
        fontFamily: "Questrial, Sans-serif",
        fontWeight: 600,
      }
    case "about_us_container":
      let about_us_bottom_margin = width / 12.5
      return {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#fff",
        marginBottom: about_us_bottom_margin,
      }
    default:
      return {}
  }
}
