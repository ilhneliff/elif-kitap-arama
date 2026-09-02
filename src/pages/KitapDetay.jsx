import { useParams, Link } from 'react-router-dom'


function KitapDetay() {
    const { id } = useParams()
    return (
        <div>
            <Link to="/">&larr; Geri</Link>
            <h2>Kitap detayı: {id}</h2>
        </div>
    )
}

export default KitapDetay