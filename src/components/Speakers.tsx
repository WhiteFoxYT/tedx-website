interface Speaker {
  id: string;
  name: string;
  role: string;
  topic: string;
}

const speakers: Speaker[] = [
  {
    id: 'AB',
    name: 'Prof. Alper Bilge',
    role: 'Yapay Zeka ve Veri Mühendisliği Profesörü',
    topic: '"Yapay Zeka Geleceği"'
  },
  {
    id: 'AA',
    name: 'Dr. Ayşe Günay Arıkan',
    role: 'Psikiyatrist & Psikoterapist',
    topic: '"Zihinsel Sağlık ve Başarı"'
  },
  {
    id: 'RS',
    name: 'Doç. Dr. Ramazan Şahin',
    role: 'Antalya TUG Teknik Müdür Yardımcısı',
    topic: '"Teknoloji ve Yönetim"'
  },
  {
    id: 'IY',
    name: 'İlker Yörü',
    role: 'KOÇ Üniversitesi Öğrencisi',
    topic: '"Gençlerin Bakış Açısı"'
  },
  {
    id: 'OG',
    name: 'Özgür Günaydın',
    role: 'Borusan Grubu CEO\'su',
    topic: '"İş Dünyasında Liderlik"'
  },
  {
    id: 'MO',
    name: 'Mustafa Özçelik',
    role: 'HAVELSAN Teknoloji Radar Genel Müdürü',
    topic: '"Teknoloji ve İnovasyon"'
  },
  {
    id: 'OB',
    name: 'Özge Bahar Sunar',
    role: 'Çocuk Kitabı Yazarı',
    topic: '"Hikayelerle Değişim"'
  },
  {
    id: 'GK',
    name: 'Göktüğ',
    role: 'AYZOFL 11. Sınıf Öğrencisi',
    topic: '"Genç Sesler"'
  },
  {
    id: 'VK',
    name: 'Veysel',
    role: 'AYZOFL 9. Sınıf Öğrencisi',
    topic: '"Genç Perspektifer"'
  }
];

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div className="speaker-card">
      <div className="speaker-avatar">{speaker.id}</div>
      <h3>{speaker.name}</h3>
      <div className="role">{speaker.role}</div>
      <div className="topic">{speaker.topic}</div>
    </div>
  );
}

export default function Speakers() {
  return (
    <section id="speakers">
      <div className="section-label">Konuşmacılarımızı Tanıyın</div>
      <div className="section-title">Bu Yıl Sizi Buluşturacaklar</div>
      <div className="speakers-grid">
        {speakers.map(speaker => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </section>
  );
}
