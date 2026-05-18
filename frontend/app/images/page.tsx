import PromptBox from "../../components/PromptBox";

export default function ImagesPage() {
  return (
    <div className="p-10 text-white">

      <h1 className="text-4xl font-bold mb-4">
        AI Images
      </h1>

      <p className="text-gray-400 mb-8">
        Generate cinematic AI artwork.
      </p>

      <PromptBox />

    </div>
  );
}