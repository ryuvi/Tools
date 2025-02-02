// components/QRCodeGenerator.tsx
"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator = () => {
	const [text, setText] = useState("https://seusite.com");

	return (
		<div className="flex flex-col bg-white items-center gap-4 p-4 border rounded-md shadow-md">
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Digite o texto ou URL"
				className="border border-black p-2 rounded-md w-full text-black"
			/>
			<QRCodeCanvas value={text} size={200} />
		</div>
	);
};

export default QRCodeGenerator;
