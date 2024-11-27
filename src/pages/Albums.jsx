import { useState, useEffect } from 'react';
import axios from 'axios';
import AlbumCard from '../components/AlbumCard';
import TrackList from '../components/TrackList';
import './css/Albums.css'

const SPOTIFY_TOKEN = '2873810e296a430c89cc5fab5d5887dc';

export default function Albums() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(
          'https://api.spotify.com/v1/artists/0X380XXQSNBYuleKzav5UO/albums',
          {
            headers: {
              Authorization: `Bearer ${SPOTIFY_TOKEN}`,
            },
          }
        );
        setAlbums(response.data.items);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  const handleAlbumSelect = async (album) => {
    setSelectedAlbum(album);
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/albums/${album.id}/tracks`,
        {
          headers: {
            Authorization: `Bearer ${SPOTIFY_TOKEN}`,
          },
        }
      );
      setTracks(response.data.items);
    } catch (error) {
      console.error('Error fetching tracks:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">BABYMETAL Albums</h1>
      <div className="album-grid">
        {albums.map((album) => (
          <AlbumCard
            key={album.id}
            album={album}
            onSelect={handleAlbumSelect}
            isSelected={selectedAlbum && selectedAlbum.id === album.id}
          />
        ))}
      </div>
      {selectedAlbum && (
        <div className="tracks-section">
          <h2 className="subtitle">{selectedAlbum.name} Tracks</h2>
          <TrackList tracks={tracks} />
        </div>
      )}
    </div>
  );
}
