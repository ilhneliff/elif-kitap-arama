import { useState } from 'react'

function AramaKutusu() {
    const [sorgu, setSorgu] = useState('')

    return (
        <div className="arama-kutusu">
            <input
                type="text"
                value={sorgu}
                onChange={(e) => setSorgu(e.target.value)}
                placeholder="Kitap ara..."
            />
            <button onClick={() => setSorgu('')}>Temizle</button>
        </div>
    )
}
    export default AramaKutusu