export const Video = () => {
  return (
    <div className="flex justify-center">
      <video
        className="px-6 h-60 md:h-96"
        id="video"
        src="/demelo-dining.mp4"
        poster={"/demelo-dining.png"}
        controls
      />
    </div>
  );
};
