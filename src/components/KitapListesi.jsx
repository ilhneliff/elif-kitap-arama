import { useEffect, useState } from 'react'

function KitapListesi() {
    const [kitaplar, setKitaplar] = useState([])

    useEffect(() => {
        async function kitaplariGetir() {
            const res = await fetch('https://openlibrary.org/search.json?q=harry+potter&limit=5')
            const veri = await res.json()
            setKitaplar(veri.docs)
        }
        kitaplariGetir()
    }, []) // <- boş dizi: "sadece bir kere çalış" demek

    return (
        <ul>
            {kitaplar.map((k) => (
                <li key={k.key}>{k.title}</li>
            ))}
        </ul>
    )
}

export default KitapListesi