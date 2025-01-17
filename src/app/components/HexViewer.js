"use client";

import { useState } from "react";

const HexViewer = () => {
	const [hexData, setHexData] = useState([]);
	const [asciiData, setAsciiData] = useState([]);
	const [error, setError] = useState("");

	const handleFileChange = (e) => {
		const file = e.target.files[0];

		if (!file) return;

		const reader = new FileReader();

		reader.onload = () => {
			const arrayBuffer = reader.result;
			const bytes = new Uint8Array(arrayBuffer);

			const hexArray = [];
			const asciiArray = [];

			for (let i = 0; i < bytes.length; i++) {
				hexArray.push(
					bytes[i].toString(16).padStart(2, "0").toUpperCase()
				);

				const char =
					bytes[i] >= 32 && bytes[i] <= 126
						? String.fromCharCode(bytes[i])
						: ".";
				asciiArray.push(char);
			}

			setHexData(hexArray);
			setAsciiData(asciiArray);
			setError("");
		};

		reader.onerror = () => {
			setError("Erro ao ler o arquivo. Por favor, tente novamente.");
		};

		reader.readAsArrayBuffer(file);
	};

	return (
		<div style={{ fontFamily: "monospace", padding: "20px" }}>
			<h1>Hex Viewer</h1>
			<input type="file" onChange={handleFileChange} />
			{error && <p style={{ color: "red" }}>{error}</p>}
			<div
				style={{
					display: "flex",
					marginTop: "20px",
					overflowX: "auto",
				}}
			>
				{/* Hexadecimal data */}
				<div style={{ marginRight: "20px" }}>
					<h3>Hex Data</h3>
					<pre>
						{hexData
							.map((byte, index) =>
								(index + 1) % 16 === 0
									? `${byte}\n`
									: `${byte} `
							)
							.join("")}
					</pre>
				</div>
				{/* ASCII data */}
				<div>
					<h3>ASCII Data</h3>
					<pre>
						{asciiData
							.map((char, index) =>
								(index + 1) % 16 === 0 ? `${char}\n` : `${char}`
							)
							.join("")}
					</pre>
				</div>
			</div>
		</div>
	);
};

export default HexViewer;
