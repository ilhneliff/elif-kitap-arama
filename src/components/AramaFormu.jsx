function AramaFormu() {
    const [sorgu, setSorgu] = useState('')

    const gonderildi = (e) => {
        e.preventDefault() // tarayıcının "sayfayı yenile" davranışını ENGELLE
        console.log('Aranan:', sorgu)
    }

    return (
        <form onSubmit={gonderildi}>
            <input value={sorgu} onChange={(e) => setSorgu(e.target.value)} />
            <button type="submit">Ara</button>
        </form>
    )
}

export default AramaFormu