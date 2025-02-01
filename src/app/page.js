import Card from "./components/Card";
import Header from "./components/Header";

const colors = {
	Pastel: [
		"#FFB3BA", // Light Pink
		"#FFDFBA", // Light Orange
		"#FFFFBA", // Light Yellow
		"#BAFFC9", // Light Green
		"#BAE1FF", // Light Blue
	],
	Vintage: [
		"#CBB38C", // Beige Brown
		"#826754", // Coffee Brown
		"#3D3B30", // Charcoal Gray
		"#A9917E", // Taupe
		"#F5D7B8", // Soft Peach
	],
	Retro: [
		"#E63946", // Bold Red
		"#F1FAEE", // Pale White
		"#A8DADC", // Teal Green
		"#457B9D", // Steel Blue
		"#1D3557", // Deep Blue
	],
	Neon: [
		"#FF6EC7", // Hot Pink
		"#32CD32", // Lime Green
		"#FFFF00", // Bright Yellow
		"#00FFFF", // Cyan
		"#FF4500", // Neon Orange
	],
	Space: [
		"#0F2027", // Dark Space Blue
		"#203A43", // Twilight Blue
		"#2C5364", // Space Gray
		"#6DD5FA", // Light Star Blue
		"#FFFFFF", // Star White
	],
	Rainbow: [
		"#FF0000", // Red
		"#FFA500", // Orange
		"#FFFF00", // Yellow
		"#008000", // Green
		"#0000FF", // Blue
	],
	Coffee: [
		"#6F4E37", // Coffee Brown
		"#C19A6B", // Latte Beige
		"#8B4513", // Espresso Dark Brown
		"#D2B48C", // Tan
		"#FFFDD0", // Cream
	],
	Christmas: [
		"#FF0000", // Christmas Red
		"#008000", // Christmas Green
		"#FFFFFF", // Snow White
		"#FFD700", // Golden Star
		"#00008B", // Midnight Blue
	],
	Halloween: [
		"#FF7518", // Pumpkin Orange
		"#8B0000", // Blood Red
		"#000000", // Black
		"#4B0082", // Dark Purple
		"#FFD700", // Ghostly Yellow
	],
};

// Função para calcular a luminosidade de uma cor hexadecimal
function getLuminance(hex) {
  let r = parseInt(hex.substr(1, 2), 16);
  let g = parseInt(hex.substr(3, 2), 16);
  let b = parseInt(hex.substr(5, 2), 16);

  // Fórmula de luminância (baseada na percepção humana)
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Função para calcular a cor da fonte baseada na cor de fundo
function getFontColor(backgroundColor) {
  const luminance = getLuminance(backgroundColor);
  return luminance > 127 ? "#000000" : "#FFFFFF"; // Fonte preta para cores claras, branca para escuras
}

function getRandomColorFromCategory() {
	// Pega todas as chaves (categorias) do objeto colors
	const categories = Object.keys(colors);

	// Seleciona uma categoria aleatória
	const randomCategory =
		categories[Math.floor(Math.random() * categories.length)];

	// Seleciona uma cor aleatória dentro da categoria escolhida
	const randomColor =
		colors[randomCategory][
			Math.floor(Math.random() * colors[randomCategory].length)
		];

	const font_color = getFontColor(randomColor);

	return [randomColor, font_color]
}


export default function Home() {

	const endpoints = [
		{endpoint: '/hex-viewer', colors: getRandomColorFromCategory()},
		{endpoint: '/binary-to-text', colors: getRandomColorFromCategory()},
		{endpoint: '/ascii-art-viewer', colors: getRandomColorFromCategory()},
		{endpoint: '/time-converter', colors: getRandomColorFromCategory()}
	]


  return (
		<div>
			{/*<Header />*/}
			<ul
				className="m-5 flex"
				style={{
					listStyle: "none",
					padding: 0,
				}}
			>
				{endpoints.map(item =>
					<li
						key={item.endpoint.replace("/", "")}
						className="p-5 m-2 w-48 h-48 hover:cursor-pointer hover:brightness-90"
						style={{backgroundColor: item.colors[0], color: item.colors[1]}}>
						<Card endpoint={item.endpoint}/>
					</li>
					)
				}

			</ul>
		</div>
  );
}
