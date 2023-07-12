

function Title({ text, color, font}) {
  const style = {
    fontFamily: font,
    color: color,
    letterSpacing: '4px',
  };
  return <h1 style={style}>{text}</h1>
}

export default Title;