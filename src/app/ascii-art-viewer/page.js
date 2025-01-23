'use client';

import { useState } from "react";

const AsciiArtViewer = () => {
	const [asciiArt, setAsciiArt] = useState("");

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();

			reader.onload = (e) => {
				setAsciiArt(e.target.result);
			};

			reader.readAsText(file);
		}
	};

	return (
		<div className="flex h-screen bg-black text-white overflow-hidden">
            <div className="h-full w-1/3 border-white border-2 flex flex-col items-center justify-center">
                <h1 className="text-xl mb-2 font-bold">ASCII Art Viewer</h1>
                <p className="text-sm mb-4">Selecine um arquivo .txt com arte ASCII</p>
                <input type="file" accept=".txt" className="cursor-pointer text-sm text-black" onChange={handleFileChange}/>
            </div>
            <div className="bg-black h-full w-full flex justify-center items-center">
                <div className="text-white font-mono w-fit text-[1px] scale-150 transform-origin-top-left tracking-wider leading-[1px] whitespace-pre">
                    {asciiArt}
                </div>
            </div>
		</div>
	);
};

export default AsciiArtViewer;
