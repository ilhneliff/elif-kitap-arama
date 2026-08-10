import { useState, useEffect } from 'react'
import KitapListesi from './components/KitapListesi.jsx'
import './App.css'

function App() {
  const [kitaplar, setKitaplar] = useState([])
  const [yukleniyor, setYukleniyor] = useState(true)

  useEffect(() => {
    async function kitaplariGetir() {
      try {
        const res = await fetch('https://openlibrary.org/search.json?q=harry+potter&limit=5')
        const veri = await res.json()
        setKitaplar(veri.docs)
      } catch (hata) {
        console.error('Veri çekilirken hata oluştu:', hata)
      } finally {
        setYukleniyor(false)
      }
    }

    kitaplariGetir()
  }, [])

  return (
    <>
      <section id="center">
        <div className="Liste">
          <KitapListesi kitaplar={kitaplar} yukleniyor={yukleniyor} />
        </div>
      </section>
    </>
  )
}

export default App