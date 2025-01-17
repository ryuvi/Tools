// components/BinaryToTextConverter.js
"use client";

import { useState } from "react";

const BinaryToTextConverter = () => {
	const [binaryInput, setBinaryInput] = useState("");
	const [textOutput, setTextOutput] = useState("");

	const handleConvert = () => {
		try {
			const text = binaryInput
				.split(" ")
				.map((bin) => String.fromCharCode(parseInt(bin, 2)))
				.join("");
			setTextOutput(text);
		} catch (error) {
			setTextOutput("Erro: Entrada inválida.");
		}
	};

	return (
		<div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
			<h1>Conversor Binário para Texto</h1>
			<textarea
				placeholder="Insira o binário separado por espaços (ex: 01001000 01100101 01101100 01101100 01101111)"
				value={binaryInput}
				onChange={(e) => setBinaryInput(e.target.value)}
				rows={5}
				cols={50}
				style={{
					marginBottom: "10px",
					padding: "10px",
					fontSize: "16px",
				}}
			/>
			<br />
			<button
				onClick={handleConvert}
				style={{
					padding: "10px 20px",
					fontSize: "16px",
					cursor: "pointer",
					backgroundColor: "#0070f3",
					color: "#fff",
					border: "none",
					borderRadius: "5px",
				}}
			>
				Converter
			</button>
			<h2>Resultado:</h2>
			<p
				style={{
					padding: "10px",
					border: "1px solid #ccc",
					borderRadius: "5px",
					backgroundColor: "#f9f9f9",
				}}
			>
				{textOutput}
			</p>
		</div>
	);
};

export default BinaryToTextConverter;
