import { ImageResponse } from "next/og"
import { join } from 'path'
import { readFileSync } from 'fs'

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Wing2Wing Protocol - Messages Delivered With Character"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation - slightly different design for Twitter
export default async function Image() {
  // Font
  const interSemiBold = await fetch(
    new URL('/public/fonts/Inter-Regular.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  const interRegular = await fetch(
    new URL('/public/fonts/Inter-Regular.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  // Logo
  const logoData = await fetch(
    new URL('/public/pigeonlogo.png', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(to bottom, #020617, #1E293B)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <img
          src={logoData}
          width={120}
          height={120}
          alt="Wing2Wing Logo"
          style={{ marginRight: "20px" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "white",
              margin: 0,
              fontFamily: "Inter",
            }}
          >
            Wing2Wing
          </h1>
          <p
            style={{
              fontSize: "36px",
              color: "#94A3B8",
              margin: 0,
              fontFamily: "Inter",
            }}
          >
            PROTOCOL
          </p>
        </div>
      </div>
      <h2
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          color: "white",
          marginBottom: "20px",
          textAlign: "center",
          fontFamily: "Inter",
        }}
      >
        Choose your pigeon. Send your message.
      </h2>
      <p
        style={{
          fontSize: "28px",
          color: "#4A80E2",
          textAlign: "center",
          fontFamily: "Inter",
        }}
      >
        Embrace the journey.
      </p>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
          style: "normal",
          weight: 600,
        },
        {
          name: "Inter",
          data: interRegular,
          style: "normal",
          weight: 400,
        },
      ],
    },
  )
}
