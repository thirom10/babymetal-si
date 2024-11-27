import '../pages/css/Albums.css'

export default function AlbumCard({ album, onSelect, isSelected }) {
    return (
      <div
        className={`album-card ${isSelected ? 'selected' : ''}`}
        onClick={() => onSelect(album)}
      >
        <img
          src={album.images[0].url}
          alt={album.name}
          className="album-image"
        />
        <div className="album-info">
          <h3 className="album-name">{album.name}</h3>
          <p className="album-release">{album.release_date}</p>
        </div>
      </div>
    );
  }
  