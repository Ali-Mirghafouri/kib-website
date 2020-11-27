export const FeatureCard = ({
  item,
  containerStyle,
  titleStyle,
  textStyle,
  iconStyle,
}) => {
  const {title, icon, text} = item;
  return (
    <div style={containerStyle}>
      <img src={icon} alt={icon} style={iconStyle} />
      <div style={titleStyle}>{title}</div>
      <div style={textStyle}>{text}</div>
    </div>
  );
};
