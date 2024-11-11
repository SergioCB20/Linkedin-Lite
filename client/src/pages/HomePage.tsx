import JobPostPreview from "../components/reutilizables/JobPostPreview";
import { JobPost } from "../models/interfaces";
import { exampleJobPost, anotherExampleJobPost } from "../data/example";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
export default function HomePage() {
  const [jobPosts, setJobPosts] = useState<JobPost[]>([]);

  // Fetch job posts from API or local data
  useEffect(() => {
    const jobPostsArray = [exampleJobPost, anotherExampleJobPost, exampleJobPost];
    setJobPosts(jobPostsArray);
  }, []);

  return (
    <div className="w-full h-full text-black">
      {/* Para usuarios */}
      <div className="w-full h-full">
        <div className="w-full h-[150px] py-[20px] flex flex-col justify-around items-center md:h-[180px] text-white">
          <h1 className="text-2xl font-bold">Hola Sergio 👋</h1>
            <h2>Ofertas de empleo nuevas: </h2>
            <div className="w-[70%] flex flex-row gap-1 justify-end items-center md:w-1/2">
              <FontAwesomeIcon icon={faFilter} />
              <p className="text-xs">Sort by:</p>
            </div>
        </div>
        <div className="w-full h-auto gap-5 flex flex-col items-center">
          {jobPosts.map((jobPost) => (
            <JobPostPreview key={jobPost.id} jobPost={jobPost} />
          ))}
        </div>
      </div>
    </div>
  );
}
