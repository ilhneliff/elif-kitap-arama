function ProfilFormu() {
    const [form, setForm] = useState({ ad: '', email: '' })

    const guncelle = (e) => {
        const { name, value } = e.target
        setForm((onceki) => ({ ...onceki, [name]: value })) // sadece değişen alanı güncelle
    }

    return (
        <form>
            <input name="ad" value={form.ad} onChange={guncelle} placeholder="Adın" />
            <input name="email" value={form.email} onChange={guncelle} placeholder="E-posta" />
        </form>
    )
}
