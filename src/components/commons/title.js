

function Title({ text, color, font, size}) {
  const style = {
    fontFamily: font,
    color: color,
    letterSpacing: '4px',
    fontSize: size
  };
  return <h1 style={style}>{text}</h1>
}

export default Title;