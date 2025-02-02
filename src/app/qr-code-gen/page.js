import QRCodeGenerator from "../components/QRCodeGenerator";

export default function QRCodeGen() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-4">Gerador de QR Code</h1>
            <QRCodeGenerator />
        </div>
    )
}
