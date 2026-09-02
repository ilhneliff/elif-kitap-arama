// src/pages/AnaSayfa.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'

function AnaSayfa() {
    const [sorgu, setSorgu] = useState('')
    const [sonuclar, setSonuclar] = useState([])
    const [yukleniyor, setYukleniyor] = useState(false)
    const [hata, setHata] = useState(null)

    const aramaYap = async (e) => {
        e.preventDefault()
        if (sorgu.trim() === '') return

        setYukleniyor(true)
        setHata(null)
        try {
            const res = await fetch(
                `https://openlibrary.org/search.json?q=${encodeURIComponent(sorgu)}&limit=12`
            )
            if (!res.ok) throw new Error('Arama başarısız oldu')
            const veri = await res.json()
            setSonuclar(veri.docs)
        } catch (err) {
            setHata(err.message)
        } finally {
            setYukleniyor(false)
        }
    }

    return (
        <div>
            <form onSubmit={aramaYap}>
                <input
                    value={sorgu}
                    onChange={(e) => setSorgu(e.target.value)}
                    placeholder="Kitap adı yaz..."
                />
                <button type="submit">Ara</button>
            </form>

            {yukleniyor && <p>Aranıyor...</p>}
            {hata && <p className="hata">{hata}</p>}
            {!yukleniyor && !hata && sonuclar.length === 0 && <p>Bir kitap ara.</p>}

            <ul className="sonuc-listesi">
                {sonuclar.map((kitap) => (
                    <li key={kitap.key}>
                        <Link to={`/kitap/${kitap.key.replace('/works/', '')}`}>
                            {kitap.title} {kitap.author_name ? `— ${kitap.author_name[0]}` : ''}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AnaSayfa
