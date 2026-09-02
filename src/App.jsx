import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import AnaSayfa from './pages/AnaSayfa.jsx'
import KitapDetay from './pages/KitapDetay.jsx'
import './App.css'




function App() {
  const [sorgu, setSorgu] = useState('')
  const [yukleniyor, setYukleniyor] = useState(false)
  const [sonuclar, setSonuclar] = useState([])
  const [hata, setHata] = useState(null)

  const ara = async (sorgu) => {
    setYukleniyor(true)
    setHata(null)
    try {
      const res = await fetch(`https://openlibrary.org/search.json?q=${sorgu}&limit=10`)
      if (!res.ok) throw new Error('Sunucu hatası: ' + res.status)
      const veri = await res.json()
      setSonuclar(veri.docs)
    } catch (err) {
      setHata(err.message)
    } finally {
      setYukleniyor(false) // başarılı da olsa, hata da olsa yükleme biter
    }
  }

  function AramaKutusu({ sorgu, setSorgu, aramaYap }) {
    const gonderildi = (e) => {
      e.preventDefault()
      aramaYap(sorgu)
    }
    return (
      <form onSubmit={gonderildi}>
        <input value={sorgu} onChange={(e) => setSorgu(e.target.value)} />
        <button type="submit">Ara</button>
      </form>
    )
  }

  function SonucListesi({ sonuclar, yukleniyor, hata }) {
    if (yukleniyor) return <p>Yükleniyor...</p>
    if (hata) return <p>Hata: {hata}</p>
    if (sonuclar.length === 0) return <p>Henüz sonuç yok.</p>
    return (
      <ul>
        {sonuclar.map((k) => <li key={k.key}>{k.title}</li>)}
      </ul>
    )
  }

  return (
    <>
      <div>
        <AramaKutusu sorgu={sorgu} setSorgu={setSorgu} aramaYap={ara} />
        <SonucListesi sonuclar={sonuclar} yukleniyor={yukleniyor} hata={hata} />
        <nav>
          <Link to="/">Ana Sayfa</Link>
        </nav>

        <Routes>
          <Route path="/" element={<AnaSayfa />} />
          <Route path="/kitap/:id" element={<KitapDetay />} />
        </Routes>
      </div>
    </>
  )


}

export default App