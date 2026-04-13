export default function Navigation() {
  const handleApplyNow = () => {
    window.location.href = 'https://forms.gle/n9ArLZgrP6KSRz8M9';
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav>
      <div className="nav-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        <span className="ayzofl">AYZOFL</span><span className="youth">YOUTH</span>
      </div>
      <ul>
        <li><a href="#about">Hakkında</a></li>
        <li><a href="#speakers">Konuşmacılar</a></li>
        <li><a href="#schedule">Program</a></li>
      </ul>
      <button onClick={handleApplyNow} className="nav-apply-btn">Hemen Başvur!</button>
    </nav>
  );
}
