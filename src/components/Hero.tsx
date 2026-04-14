export default function Hero() {
  // # Link: https://forms.gle/n9ArLZgrP6KSRz8M9 - Apply Now action button link
  const handleApplyNow = () => {
    window.location.href = 'https://forms.gle/n9ArLZgrP6KSRz8M9';
  };

  return (
    <section className="hero">
      <h1>
        <span className="tedx">TEDx</span> <span className="ayzofl">AYZOFL</span>
      </h1>
      <p>Her alandan esin verici konuşmalarla vizyonunuzu genişletme şansını yakalayın.</p>
      <p className="details">📅 25 Nisan 2026 &nbsp;|&nbsp; 📍 Yusuf Ziya Öner Fen Lisesi, Antalya / Döşemealtı</p>
      <button onClick={handleApplyNow} className="btn-apply">Hemen Başvur!</button>
      <a href="#schedule" className="btn">Programı Gör</a>
    </section>
  );
}
