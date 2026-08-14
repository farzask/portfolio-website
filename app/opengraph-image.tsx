import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Farza Shahzad — Full Stack Developer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#e9e5db',
          color: '#14130f',
          fontFamily: 'Helvetica, Arial, sans-serif',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          Farza Shahzad
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 28,
            fontSize: 40,
            fontWeight: 600,
            color: '#e8590c',
            letterSpacing: '-0.01em',
          }}
        >
          Full Stack Developer
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 56,
            width: 160,
            height: 4,
            background: '#14130f',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
