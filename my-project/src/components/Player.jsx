import  { useState } from 'react';
import YouTube from 'react-youtube';

const Player = () => {
  const [videoId, setVideoId] = useState('');
  const [url, setUrl] = useState('');

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const playVideo = () => {
    const videoId = extractVideoId(url);
    if (videoId) {
      setVideoId(videoId);
    } else {
      alert('Invalid YouTube URL');
    }
  };

  const extractVideoId = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:v\/|watch\?v=|embed\/|shorts\/|watch\?.*v=|.*&v=)|youtu\.be\/)([^#&?]*).*/;
    const match = url.match(regex);
    return (match && match[1].length === 11) ? match[1] : null;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
      <h1 className="text-4xl mb-12 hover:text-rose-500 font-bold">YouTube  Player</h1>
      <div className="w-full max-w-md space-y-4 mb-8">
        <input
          type="text"
          placeholder="Enter YouTube URL"
          className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none "
          onChange={handleUrlChange}
        />
        <button
          onClick={playVideo}
          className="w-full px-4 py-2 bg-green-500 rounded
          hover:bg-green-600  "
        >
          Play Video
        </button>
        {videoId && (
          <div className="relative w-full" style={{ paddingBottom: '75%' }}>
            <div className="absolute inset-0 flex items-center justify-center mt-24">
              <YouTube
                videoId={videoId}
                opts={{ playerVars: { autoplay: 1 } }}
                containerClassName="w-full h-full "
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Player;
