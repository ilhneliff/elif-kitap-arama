import { useState } from 'react'

function KitapArama() {
    const [sonuclar, setSonuclar] = useState([])
    const [yukleniyor, setYukleniyor] = useState(false)
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
    
    return (
        <div>
            <button onClick={() => ara('harry potter')}>Test Ara</button>

            {yukleniyor && <p>Yükleniyor...</p>}
            {hata && <p className="hata">Hata: {hata}</p>}
            {!yukleniyor && !hata && sonuclar.length === 0 && <p>Henüz sonuç yok, bir arama yap.</p>}

            <ul>
                {sonuclar.map((k) => (
                    <li key={k.key}>{k.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default KitapArama
