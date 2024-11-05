import JobPostPreview from "../components/reutilizables/JobPostPreview";
import { JobPost } from "../models/interfaces";
import { exampleJobPost, anotherExampleJobPost } from "../data/example";
import { useState, useEffect } from "react";
export default function HomePage() {
  const [jobPosts, setJobPosts] = useState<JobPost[]>([]);

  // Fetch job posts from API or local data
  useEffect(() => {
    const jobPostsArray = [exampleJobPost, anotherExampleJobPost];
    setJobPosts(jobPostsArray);
  }, []);

  return (
    <div className="w-full h-full text-black">
      {/* Para usuarios */}
      <div className="w-full h-full border-2 border-black">
        <div className="w-full h-[20%] flex flex-col justify-around">
          <h1 className="text-2xl w-full text-center font-bold">Hola Sergio 👋</h1>
          <div className="w-full flex flex-row justify-between px-[5%]">
            <h2>Ofertas de empleo nuevas: </h2>
            <p>Filtros</p>
          </div>
        </div>
        <div className="w-full h-[80%] gap-5 border-2 border-blue-400 flex flex-col items-center pt-[50px]">
          {jobPosts.map((jobPost) => (
            <JobPostPreview key={jobPost.id} jobPost={jobPost} />
          ))}
        </div>
      </div>
    </div>
  );
}
