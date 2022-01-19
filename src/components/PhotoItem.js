import React, { useState, useEffect } from 'react';

const PhotoItem = ({ photo }) => {
  const [like, setLike] = useState(false);

  const { date, explanation, url, title } = photo;

  useEffect(() => {
    if (localStorage.getItem(`${title}-likeState`)) {
      // console.log('loaded');
      const likeState = JSON.parse(localStorage.getItem(`${title}-likeState`));
      setLike(likeState);
    }
  }, []);

  const onClick = () => {
    console.log(`changed to ${!like}`);
    localStorage.setItem(`${title}-likeState`, JSON.stringify(!like));
    setLike(!like);
  };

  return (
    <div className="card card-bordered shadow-xl bg-primary-content flex items-center">
      {url.includes('youtube') ? (
        <iframe src={url} width="640" height="400"></iframe>
      ) : (
        <figure>
          <img src={url} alt={title} />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-info badge-lg">{date}</div>
        </h2>
        <p>{explanation}</p>
        <div className="my-4">
          <button
            onClick={onClick}
            className={
              like
                ? 'btn btn-error text-secondary'
                : 'btn btn-info text-secondary'
            }
          >
            {like ? 'Unlike' : 'Like'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoItem;
