import '../pages/css/Albums.css'

export default function TrackList({ tracks }) {
    return (
      <ul className="track-list">
        {tracks.map((track) => (
          <li key={track.id} className="track-item">
            <h3 className="track-name">{track.name}</h3>
            <p className="track-duration">
              Duration: {Math.floor(track.duration_ms / 60000)}:
              {((track.duration_ms % 60000) / 1000).toFixed(0).padStart(2, '0')}
            </p>
          </li>
        ))}
      </ul>
    );
  }
  