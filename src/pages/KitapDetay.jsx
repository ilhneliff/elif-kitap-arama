import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function KitapDetay() {
    const { id } = useParams() // örn: "OL82586W"
    const [kitap, setKitap] = useState(null)
    const [yukleniyor, setYukleniyor] = useState(true)

    useEffect(() => {
        async function detayGetir() {
            setYukleniyor(true)
            const res = await fetch(`https://openlibrary.org/works/${id}.json`)
            const veri = await res.json()
            setKitap(veri)
            setYukleniyor(false)
        }
        detayGetir()
    }, [id]) // id değişirse (başka bir kitaba geçilirse) tekrar çalış

    if (yukleniyor) return <p>Yükleniyor...</p>
    if (!kitap) return <p>Kitap bulunamadı.</p>

    return (
        <div>
            <Link to="/">&larr; Geri</Link>
            <h2>{kitap.title}</h2>
            <p>
                {typeof kitap.description === 'string'
                    ? kitap.description
                    : kitap.description?.value ?? 'Açıklama bulunamadı.'}
            </p>
        </div>
    )
}

export default KitapDetay
