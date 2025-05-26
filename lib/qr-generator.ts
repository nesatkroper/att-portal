import QRCode from "qrcode"

export async function generateQRCode(data: any): Promise<string> {
  try {
    const qrCodeUrl = await QRCode.toDataURL(JSON.stringify(data), {
      errorCorrectionLevel: "M",
      type: "image/png",
      quality: 0.92,
      margin: 1,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
      width: 256,
    })
    return qrCodeUrl
  } catch (error) {
    console.error("QR Code generation error:", error)
    throw new Error("Failed to generate QR code")
  }
}

export function downloadQRCode(qrCodeUrl: string, filename: string) {
  const link = document.createElement("a")
  link.href = qrCodeUrl
  link.download = `${filename}.png`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
