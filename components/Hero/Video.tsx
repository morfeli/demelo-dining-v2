export const Video = () => {
  return (
    <div className="flex justify-center md:pt-8">
      <video
        className="px-6 my-4 h-60 md:h-96"
        id="video"
        src="/demelo-dining.mp4"
        poster={"/demelo-dining.png"}
        controls
      />
    </div>
  );
};
