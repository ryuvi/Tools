"use client";

import { useState } from "react";

const TimeConverter = () => {
	const [inputTime, setInputTime] = useState("");
	const [unit, setUnit] = useState("seconds");
	const [convertedTime, setConvertedTime] = useState(null);

	const convertTime = () => {
		let timeInSeconds;

		// Converter o tempo inserido para segundos, baseado na unidade selecionada
		switch (unit) {
			case "milliseconds":
				timeInSeconds = inputTime / 1000;
				break;
			case "seconds":
				timeInSeconds = inputTime;
				break;
			case "minutes":
				timeInSeconds = inputTime * 60;
				break;
			case "hours":
				timeInSeconds = inputTime * 3600;
				break;
			case "days":
				timeInSeconds = inputTime * 86400;
				break;
			case "months":
				timeInSeconds = inputTime * 2592000; // Aproximadamente 30 dias
				break;
			case "years":
				timeInSeconds = inputTime * 31536000; // Aproximadamente 365 dias
				break;
			default:
				timeInSeconds = inputTime;
		}

		// Calculando as conversões
		const timeInMilliseconds = timeInSeconds * 1000;
		const timeInMinutes = timeInSeconds / 60;
		const timeInHours = timeInSeconds / 3600;
		const timeInDays = timeInSeconds / 86400;
		const timeInMonths = timeInSeconds / 2592000;
		const timeInYears = timeInSeconds / 31536000;

		setConvertedTime({
			milliseconds: timeInMilliseconds,
			seconds: timeInSeconds,
			minutes: timeInMinutes,
			hours: timeInHours,
			days: timeInDays,
			months: timeInMonths,
			years: timeInYears,
		});
	};

	return (
		<div className="flex justify-around items-center mx-24 p-8 bg-gray-50 shadow-lg rounded-lg">
			<div className="form mr-5">
			<h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
				Conversor de Tempo
			</h1>

			<div className="mb-4">
				<input
					type="number"
					value={inputTime}
					onChange={(e) => setInputTime(parseFloat(e.target.value))}
					placeholder="Insira o valor do tempo"
					className="w-full p-4 border-2 border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>

			<div className="space-x-4 mb-6">
				<label className="inline-flex items-center text-gray-900">
					<input
						type="radio"
						name="unit"
						value="milliseconds"
						checked={unit === "milliseconds"}
						onChange={() => setUnit("milliseconds")}
						className="form-radio text-blue-500"
					/>
					<span className="ml-2">Milissegundos</span>
				</label>
				<label className="inline-flex items-center text-gray-900">
					<input
						type="radio"
						name="unit"
						value="seconds"
						checked={unit === "seconds"}
						onChange={() => setUnit("seconds")}
						className="form-radio text-blue-500"
					/>
					<span className="ml-2">Segundos</span>
				</label>
				<label className="inline-flex items-center text-gray-900">
					<input
						type="radio"
						name="unit"
						value="minutes"
						checked={unit === "minutes"}
						onChange={() => setUnit("minutes")}
						className="form-radio text-blue-500"
					/>
					<span className="ml-2">Minutos</span>
				</label>
				<label className="inline-flex items-center text-gray-900">
					<input
						type="radio"
						name="unit"
						value="hours"
						checked={unit === "hours"}
						onChange={() => setUnit("hours")}
						className="form-radio text-blue-500"
					/>
					<span className="ml-2">Horas</span>
				</label>
				<label className="inline-flex items-center text-gray-900">
					<input
						type="radio"
						name="unit"
						value="days"
						checked={unit === "days"}
						onChange={() => setUnit("days")}
						className="form-radio text-blue-500"
					/>
					<span className="ml-2">Dias</span>
				</label>
				<label className="inline-flex items-center text-gray-900">
					<input
						type="radio"
						name="unit"
						value="months"
						checked={unit === "months"}
						onChange={() => setUnit("months")}
						className="form-radio text-blue-500"
					/>
					<span className="ml-2">Meses</span>
				</label>
				<label className="inline-flex items-center text-gray-900">
					<input
						type="radio"
						name="unit"
						value="years"
						checked={unit === "years"}
						onChange={() => setUnit("years")}
						className="form-radio text-blue-500"
					/>
					<span className="ml-2">Anos</span>
				</label>
			</div>

			<button
				onClick={convertTime}
				className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
			>
				Converter
			</button>
			</div>

			<div className="table ml-5 w-full">
			{convertedTime && (
				<table className="w-full table-fixed border-collapse bg-white shadow-md rounded-lg">
					<thead>
						<tr className="bg-blue-500 text-white">
							<th className="p-4 text-left">Unidade</th>
							<th className="p-4 text-left">Valor</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-t">
							<td className="p-4 text-gray-900">Milissegundos</td>
							<td className="p-4 text-gray-900">
								{convertedTime.milliseconds.toFixed(2)}
							</td>
						</tr>
						<tr className="border-t">
							<td className="p-4 text-gray-900">Segundos</td>
							<td className="p-4 text-gray-900">
								{convertedTime.seconds.toFixed(2)}
							</td>
						</tr>
						<tr className="border-t">
							<td className="p-4 text-gray-900">Minutos</td>
							<td className="p-4 text-gray-900">
								{convertedTime.minutes.toFixed(2)}
							</td>
						</tr>
						<tr className="border-t">
							<td className="p-4 text-gray-900">Horas</td>
							<td className="p-4 text-gray-900">
								{convertedTime.hours.toFixed(2)}
							</td>
						</tr>
						<tr className="border-t">
							<td className="p-4 text-gray-900">Dias</td>
							<td className="p-4 text-gray-900">
								{convertedTime.days.toFixed(2)}
							</td>
						</tr>
						<tr className="border-t">
							<td className="p-4 text-gray-900">Meses</td>
							<td className="p-4 text-gray-900">
								{convertedTime.months.toFixed(2)}
							</td>
						</tr>
						<tr className="border-t">
							<td className="p-4 text-gray-900">Anos</td>
							<td className="p-4 text-gray-900">
								{convertedTime.years.toFixed(2)}
							</td>
						</tr>
					</tbody>
				</table>
			)}
			</div>
		</div>
	);
};

export default TimeConverter;
