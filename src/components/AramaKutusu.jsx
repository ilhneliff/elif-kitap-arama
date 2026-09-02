// ❌ YANLIŞ: sorgu state'i AramaKutusu içinde hapsolmuş,
// SonucListesi bu veriye hiç ulaşamıyor
function AramaKutusu() {
    const [sorgu, setSorgu] = useState('')
    return <input value={sorgu} onChange={(e) => setSorgu(e.target.value)} />
}

function SonucListesi() {
    // sorgu'ya buradan erişimin YOK — bu iki bileşen birbirinden habersiz
    return <p>???</p>
}
