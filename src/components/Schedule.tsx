interface ScheduleItem {
  time: string;
  startTime: string;
  endTime: string;
  speaker: string;
  type: 'talk' | 'break';
}

const scheduleItems: ScheduleItem[] = [
  { time: '09:00-09:50', startTime: '09:00', endTime: '09:50', speaker: 'Kayıt Kabul & Açılış Seremonisi', type: 'break' },
  { time: '09:50-10:10', startTime: '09:50', endTime: '10:10', speaker: 'Prof. Alper Bilge', type: 'talk' },
  { time: '10:20-10:40', startTime: '10:20', endTime: '10:40', speaker: 'Dr. Ayşe Günay Arıkan', type: 'talk' },
  { time: '10:50-11:20', startTime: '10:50', endTime: '11:20', speaker: 'Kahve Molası', type: 'break' },
  { time: '11:20-11:40', startTime: '11:20', endTime: '11:40', speaker: 'Doç. Dr. Ramazan Şahin', type: 'talk' },
  { time: '11:50-12:10', startTime: '11:50', endTime: '12:10', speaker: 'İlker Yörü', type: 'talk' },
  { time: '12:10-13:40', startTime: '12:10', endTime: '13:40', speaker: 'Öğle Arasıürü', type: 'break' },
  { time: '13:40-14:00', startTime: '13:40', endTime: '14:00', speaker: 'Şükrü Can', type: 'talk' },
  { time: '14:00-14:20', startTime: '14:00', endTime: '14:20', speaker: 'Mustafa Özçelik', type: 'talk' },
  { time: '14:20-14:50', startTime: '14:20', endTime: '14:50', speaker: 'Kahve Molası', type: 'break' },
  { time: '14:50-15:10', startTime: '14:50', endTime: '15:10', speaker: 'Özge Bahar Sunar', type: 'talk' },
  { time: '15:10-15:30', startTime: '15:10', endTime: '15:30', speaker: 'Göktüğ Güler & Veysel Dinç', type: 'talk' },
  { time: '15:30-17:10', startTime: '15:30', endTime: '17:10', speaker: 'Kapanış Seremonisi', type: 'break' }
];

export default function Schedule() {
  return (
    <section className="schedule" id="schedule">
      <div className="section-label">Program</div>
      <div className="section-title">Etkinlik Programı</div>
      <p style={{ marginBottom: '40px', fontSize: '14px', color: '#c5c8cc' }}>
        <strong>📅 Tarih:</strong> 25 Nisan 2026 | <strong>📍 Mekan:</strong> Yusuf Ziya Öner Fen Lisesi
      </p>
      
      <div className="schedule-timeline">
        {scheduleItems.map((item, index) => (
          <div key={index} className={`schedule-item ${item.type}`}>
            <div className="schedule-time">
              <span className="time-badge">{item.startTime}</span>
              <span className="time-separator">-</span>
              <span className="time-badge">{item.endTime}</span>
            </div>
            <div className="schedule-content">
              <div className="speaker-info">{item.speaker}</div>
              <div className={`schedule-type ${item.type}`}>
                {item.type === 'talk' ? '🎤 Konuşma' : '☕ Aralık'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
