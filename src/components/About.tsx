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
        <div className="section-title">Yönetim Kurulu Başkanından Bir Mesaj</div>
        <p style={{ marginBottom: '20px' }}>
          <strong>Değerli Katılımcılar,</strong>
        </p>
        <p style={{ marginBottom: '20px' }}>
          TEDxAYZOFL YOUTH etkinliğine katıldığınız için teşekkür ederiz. Bu etkinlik, gençlerimizin
          yaratıcılıklarını ve fikirlerini paylaşmak için bir platform oluşturmak amacıyla organize edilmiştir.
        </p>
        <p style={{ marginBottom: '20px' }}>
          Sınırları aşan ve değişim yaratan fikirleri bir araya getirerek, daha iyi bir gelecek inşaa etmeyi
          amaçlıyoruz. Sizin ilham veren konuşmalarınız ve fikirleriniz, bu etkinliği başarılı kılacaktır.
        </p>
        <p>
          Hoş geldiniz ve keyifli bir etkinlik geçirmeniz dileğiyle,
          <br />
          <strong>AYZOFL YOUTH Yönetim Kurulu</strong>
        </p>
      </section>
    </>
  );
}
