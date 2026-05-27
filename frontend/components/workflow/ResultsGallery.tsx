type ResultsGalleryProps = {
  result: any;
};

export default function ResultsGallery({
  result,
}: ResultsGalleryProps) {
  if (!result) return null;

  return (
    <div className="mt-8 space-y-4">

      <div className="bg-black/20 rounded-xl p-4">
        <h3 className="font-semibold mb-2">
          Image Prompt
        </h3>

        <p>{result.imagePrompt}</p>
      </div>

      <div className="bg-black/20 rounded-xl p-4">
        <h3 className="font-semibold mb-2">
          Video Prompt
        </h3>

        <p>{result.videoPrompt}</p>
      </div>

      <div className="bg-black/20 rounded-xl p-4">
        <h3 className="font-semibold mb-2">
          Voice Script
        </h3>

        <p>{result.voiceScript}</p>
      </div>

      {result.imageResult?.images?.[0] && (
        <div className="bg-black/20 rounded-xl p-4">
          <h3 className="font-semibold mb-4">
            Generated Image
          </h3>

          <img
            src={result.imageResult.images[0]}
            alt="Generated"
            className="rounded-xl max-w-md mx-auto"
          />
        </div>
      )}

      {result.voiceResult?.audioUrl && (
        <div className="bg-black/20 rounded-xl p-4">
          <h3 className="font-semibold mb-4">
            Generated Voice
          </h3>

          <audio
            src={result.voiceResult.audioUrl}
            controls
            className="max-w-md mx-auto w-full"
          />
        </div>
      )}

      {result.videoResult?.videos?.[0] && (
        <div className="bg-black/20 rounded-xl p-4">
          <h3 className="font-semibold mb-4">
            Generated Video
          </h3>

          <video
            src={result.videoResult.videos[0]}
            controls
            className="w-full max-w-md mx-auto rounded-xl"
          />
        </div>
      )}
    </div>
  );
}