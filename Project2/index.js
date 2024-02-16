const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll(".color h2");
let initialColors;


//Color generate
function generateHex() {
  const hexColor = chroma.random();
  return hexColor;
}

function randomColors() {
  colorDivs.forEach((div,index) => {
    const hexText = div.children[0];
    const randomColors = generateHex()

    //Add background color
    div.style.backgroundColor = randomColors
    hexText.innerText = randomColors
    //Check for contrast
    checkTextContrast(randomColors, hexText)
    //Initial Colorize Sliders
    const color = chroma(randomColors);
    const sliders = div.querySelectorAll(".sliders input")
    const hue = sliders[0]
    const brightness = sliders[1]
    const saturation = sliders[2]


    colorizeSliders(color,hue,brightness,saturation)
  })
}

function checkTextContrast(color, text) {
  const luminance = chroma(color).luminance()
  if (luminance > 0.5) {
    text.style.color = "black";
  }else {
    text.style.color = "white";
  }
}


function colorizeSliders(color,hue,brightness,saturation){
  const noSat = color.set('hsl.s,', 0)
  const fullSat = color.set('hsl.s,', 1)
  const scaleSat = chroma.scale([noSat, color,fullSat])
  const midBright = color.set('hsl.l', 0.5)
  const scaleBright = chroma.scale(['black',midBright, 'white'])

  saturation.style.backgroundImage = `linear-gradient(to right, ${scaleSat(0)}, ${scaleSat(1)})`
  saturation.style.backgroundImage = `linear-gradient(to right, ${scaleBright(0)}, ${scaleBright(1)})`

}
randomColors()
