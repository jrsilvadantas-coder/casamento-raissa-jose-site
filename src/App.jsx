import { useState } from 'react'

export default function App() {
  const photos = [
    '/foto-casal-2.jpg',
    '/foto-casal-3.jpg',
    '/foto-casal-4.jpg',
  ]

  const gifts = [
    { name: 'Café para sobreviver aos primeiros dias', value: 'R$ 20' },
    { name: 'Um mês de corte de cabelo do noivo', value: 'R$ 25' },
    { name: 'Vale para a noiva não brigar com o noivo', value: 'R$ 30' },
    { name: 'Vale para o noivo ter razão por um dia', value: 'R$ 35' },
    { name: 'Pizza do sábado à noite', value: 'R$ 45' },
    { name: 'Cinema para continuar namorando casados', value: 'R$ 80' },
    { name: 'Jantar sem lavar louça', value: 'R$ 150' },
    { name: 'Ajuda para a lua de mel', value: 'R$ 300' },
    { name: 'Presente premium para começar o lar', value: 'R$ 500' },
  ]

  const [reserved, setReserved] = useState([])

  function reserveGift(name) {
    navigator.clipboard.writeText('19992532242')
    setReserved((current) => [...new Set([...current, name])])
    alert('Chave Pix copiada.')
  }

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: 24 }}>
      <div
        style={{
          background: 'white',
          borderRadius: 24,
          overflow: 'hidden',
          boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
          marginBottom: 32,
        }}
      >
        <img
          src="/foto-casal.jpg"
          alt="Raíssa e José Roberto"
          style={{ width: '100%', height: 460, objectFit: 'cover' }}
        />

        <div style={{ padding: 32 }}>
          <p style={{ color: '#64748b', marginBottom: 8 }}>01 • 08 • 2026</p>

          <h1 style={{ fontSize: 48, margin: 0 }}>
            Raíssa & José Roberto
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: '#475569',
              marginTop: 16,
            }}
          >
            O amor transforma dias comuns em eternidade. Estamos construindo
            nosso lar e ficaremos felizes em compartilhar esse começo com você.
          </p>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
          marginBottom: 36,
        }}
      >
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt="Galeria"
            style={{
              width: '100%',
              height: 260,
              objectFit: 'cover',
              borderRadius: 20,
            }}
          />
        ))}
      </div>

      <h2 style={{ marginBottom: 18 }}>Lista de presentes</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }}
      >
        {gifts.map((gift) => {
          const isReserved = reserved.includes(gift.name)

          return (
            <div
              key={gift.name}
              style={{
                background: 'white',
                padding: 20,
                borderRadius: 20,
                boxShadow: '0 3px 12px rgba(0,0,0,0.04)',
              }}
            >
              <h3 style={{ marginTop: 0 }}>{gift.name}</h3>
              <p style={{ fontSize: 22, fontWeight: 600 }}>{gift.value}</p>

              {isReserved ? (
                <div
                  style={{
                    padding: 12,
                    background: '#f1f5f9',
                    borderRadius: 12,
                    textAlign: 'center',
                  }}
                >
                  Indisponível
                </div>
              ) : (
                <button
                  onClick={() => reserveGift(gift.name)}
                  style={{
                    width: '100%',
                    padding: 12,
                    borderRadius: 12,
                    border: '1px solid #cbd5e1',
                    background: 'white',
                    cursor: 'pointer',
                  }}
                >
                  Presentear via Pix
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
