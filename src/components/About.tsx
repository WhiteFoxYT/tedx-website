export default function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="section-label">Etkinlik Hakkında</div>
        <div className="section-title"><span className="tedx">TEDx</span> <span className="ayzofl">AYZOFL</span> <span className="youth">YOUTH</span> Nedir?</div>
        <p>
          <span className="tedx">TEDx</span><span className="ayzofl">AYZOFL</span> <span className="youth">YOUTH</span>, TED lisansı altında bağımsız olarak düzenlenen büyüleyici bir etkinliktir.
          Hoşgeldiniz! Bu etkinlikte, gençlik topluluğumuzdan ilham veren insanları bir araya getiriyoruz.
          <br /><br />
          Bu yıl "Sınırları Aşmak" teması altında, fikirler, insanlar ve teknolojilerin nasıl sınırları aştığını
          ve dünyayı nasıl değiştirdiğini keşfediyoruz. TED, kısa ve güçlü konuşmalar aracılığıyla fikirler
          yayılmasına adanmış kar amacı gütmeyen bir kuruluştur.
        </p>
      </section>

      <section className="about" id="message" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)' }}>
        <div className="section-label">Liderlik Mesajı</div>
        <div className="section-title">Organizasyon Direktöründen Bir Mesaj</div>
        <p style={{ marginBottom: '20px' }}>
          <strong>Değerli Katılımcılar,</strong>
        </p>
        <p style={{ marginBottom: '20px' }}>
          TEDxAYZOFL Youth etkinliğine katıldığınız için teşekkür ederiz! Bu etkinlik, bütün katılımcıların fikirlerini özgürce ifade edebildiği ve birbirinden ilham aldığı bir platform oluşturma amacıyla, tamamen lise öğrencilerinden oluşan ekibimiz tarafından büyük bir heyecanla organize edilmiştir.
        </p>
        <p style={{ marginBottom: '20px' }}>
          Bu yıl "Farkındalık" temasıyla; kendimizi, çevremizi ve dünyayı daha bilinçli bir şekilde anlamanın gücünü birlikte keşfetmeyi hedefliyoruz. Alanında değerli konuşmacılarımızın ilham verici paylaşımlarıyla, yeni bakış açıları kazanacağımıza ve vizyonunuzu genişletmeye yardımcı olacağımıza inanıyoruz. Sizlerin katkısı ve enerjisi, bu etkinliği daha da anlamlı kılacaktır.
        </p>
        <p>
          Katılımınız için teşekkür eder, ilham dolu ve keyifli bir etkinlik geçirmenizi dilerim.
          <br />
          <br />
          <strong>Ekin ÖZ</strong>
        </p>
        <p>
          <strong>Organizasyon Direktörü</strong>
        </p>
      </section>
    </>
  );
}
