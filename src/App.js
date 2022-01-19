import React, { useEffect, useState } from 'react';
import photoService from './services/photos';
import PhotoList from './components/PhotoList';
import Refresh from './components/Refresh';
import Loading from './components/Loading';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getInitialPhotos = async () => {
      await photoService.getPhotos().then((response) => {
        const initialPhotos = response.data;
        setPhotos(initialPhotos);
        setLoading(false);
        localStorage.setItem('photos', JSON.stringify(initialPhotos));
      });
    };
    if (localStorage.getItem('photos')) {
      // console.log(localStorage.getItem('photos'));
      setPhotos(JSON.parse(localStorage.getItem('photos')));
      setLoading(false);
    } else {
      // console.log('photos from api');
      getInitialPhotos();
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  const getNewImages = () => {
    const getInitialPhotos = async () => {
      await photoService.getPhotos().then((response) => {
        const initialPhotos = response.data;
        setPhotos(initialPhotos);
        setLoading(false);
        localStorage.setItem('photos', JSON.stringify(initialPhotos));
      });
    };

    for (const [key, value] of Object.entries(localStorage)) {
      if (key.includes('likeState')) {
        localStorage.removeItem(key);
      }
    }
    setLoading(true);
    getInitialPhotos();
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-screen-sm flex-col space-y-8 py-8">
        <Refresh onClick={getNewImages} />
        <PhotoList photos={photos} />
      </div>
    </div>
  );
};

export default App;
