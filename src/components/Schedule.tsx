interface ScheduleItem {
  time: string;
  event: string;
  speaker: string;
  type: 'talk' | 'break';
}

const scheduleItems: ScheduleItem[] = [
  { time: '09:00', event: 'Kayıt Kabul & Açılış Seremonisi', speaker: '—', type: 'break' },
  { time: '09:50', event: 'Yapay Zeka Geleceği', speaker: 'Prof. Alper Bilge', type: 'talk' },
  { time: '10:20', event: 'Zihinsel Sağlık ve Başarı', speaker: 'Dr. Ayşe Günay Arıkan', type: 'talk' },
  { time: '10:50', event: 'Kahve Molası', speaker: '—', type: 'break' },
  { time: '11:20', event: 'Teknoloji ve Yönetim', speaker: 'Doç. Dr. Ramazan Şahin', type: 'talk' },
  { time: '11:50', event: 'Gençlerin Bakış Açısı', speaker: 'İlker Yörü', type: 'talk' },
  { time: '12:20', event: 'İş Dünyasında Liderlik', speaker: 'Özgür Günaydın', type: 'talk' },
  { time: '12:40', event: 'Öğle Arasıürü', speaker: '—', type: 'break' },
  { time: '14:10', event: 'Teknoloji ve İnovasyon', speaker: 'Mustafa Özçelik', type: 'talk' },
  { time: '14:40', event: 'Hikayelerle Değişim', speaker: 'Özge Bahar Sunar', type: 'talk' },
  { time: '15:10', event: 'Kahve Molası', speaker: '—', type: 'break' },
  { time: '15:40', event: 'Genç Sesler', speaker: 'Göktüğ', type: 'talk' },
  { time: '16:10', event: 'Genç Perspektifer', speaker: 'Veysel', type: 'talk' },
  { time: '16:40', event: 'Kapanış Seremonisi', speaker: '—', type: 'break' }
];

export default function Schedule() {
  return (
    <section className="schedule" id="schedule">
      <div className="section-label">Program</div>
      <div className="section-title">Etkinlik Programı</div>
      <p style={{ marginBottom: '30px', fontSize: '14px', color: '#c5c8cc' }}>
        <strong>📍 Mekan:</strong> Yusuf Ziya Öner Fen Lisesi, Antalya / Döşemealtı
      </p>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Saat</th>
            <th>Etkinlik</th>
            <th>Konuşmacı</th>
            <th>Tür</th>
          </tr>
        </thead>
        <tbody>
          {scheduleItems.map((item, index) => (
            <tr key={index}>
              <td className="time">{item.time}</td>
              <td className="event-name">{item.event}</td>
              <td className="speaker-name">{item.speaker}</td>
              <td>
                {item.type === 'talk' ? (
                  <span className="tag-talk">Konuşma</span>
                ) : (
                  <span className="tag-break">
                    {item.event.includes('Kapı') && 'Kayıt'}
                    {item.event.includes('Açılış') && 'Açılış'}
                    {item.event.includes('Kahve') && 'Arası'}
                    {item.event.includes('Öğle') && 'Arası'}
                    {item.event.includes('Kapanış') && 'Kapanış'}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
