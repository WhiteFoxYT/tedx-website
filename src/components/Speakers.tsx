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
    topic: ''
  },
  {
    id: 'AA',
    name: 'Dr. Ayşe Günay Arıkan',
    role: 'Psikiyatrist & Psikoterapist',
    topic: ''
  },
  {
    id: 'RS',
    name: 'Doç. Dr. Ramazan Şahin',
    role: 'Türkiye Ulusal Gözlemevi Teknik Müdür Yardımcısı',
    topic: ''
  },
  {
    id: 'IY',
    name: 'İlker Yörü',
    role: 'KOÇ Üniversitesi Öğrencisi',
    topic: ''
  },
  {
    id: 'SC',
    name: 'Şükrü Can',
    role: 'Southwind Airlines CEO\'su',
    topic: ''
  },
  {
    id: 'MO',
    name: 'Mustafa Özçelik',
    role: 'HAVELSAN Teknoloji Radar Genel Müdürü',
    topic: ''
  },
  {
    id: 'OB',
    name: 'Özge Bahar Sunar',
    role: 'Çocuk Kitabı Yazarı',
    topic: ''
  },
  {
    id: 'GK',
    name: 'Göktüğ',
    role: 'AYZOFL 11. Sınıf Öğrencisi',
    topic: ''
  },
  {
    id: 'VK',
    name: 'Veysel',
    role: 'AYZOFL 9. Sınıf Öğrencisi',
    topic: ''
  }
];

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div className="speaker-card">
      <div className="speaker-avatar">{speaker.id}</div>
      <h3>{speaker.name}</h3>
      <div className="role">{speaker.role}</div>
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
