import { Link } from 'react-router-dom'

function AnaSayfa() {
    const kitaplar = [
        { id: 'OL1', baslik: 'Harry Potter' },
        { id: 'OL2', baslik: 'Yüzüklerin Efendisi' },
    ]

    return (
        <ul>
            {kitaplar.map((k) => (
                <li key={k.id}>
                    <Link to={`/kitap/${k.id}`}>{k.baslik}</Link>
                </li>
            ))}
        </ul>
    )
}

export default AnaSayfa