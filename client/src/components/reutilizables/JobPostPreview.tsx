import { JobPost } from "../../models/interfaces";
import { Link } from "react-router-dom";

interface IJobPostPreview {
  jobPost: JobPost;
}

const JobPostPreview: React.FC<IJobPostPreview> = ({ jobPost }) => {
  return (
    <Link to={`/Job-Post/${jobPost.id}`}
      className="flex flex-col gap-3 w-[70%] bg-item border-2 border-black 
    p-[10px] cursor-pointer rounded-lg hover:bg-itemHover lg:w-[40%]"
    >
      <div className="flex flex-row gap-3 items-center">
        <img
          src={
            jobPost.company.imageUrl
              ? jobPost.company.imageUrl
              : "https://c0.klipartz.com/pngpicture/291/853/gratis-png-persona-juridica-empresa-persona-natural-empresa.png"
          }
          className="w-10 h-10 object-contain"
          alt={`logo de ${jobPost.company.name}`}
        />
        <p className="font-bold">{jobPost.company.name}</p>
      </div>
      <div className="flex flex-row justify-between pe-[20px]">
        <h2 className="font-bold text-xl">{jobPost.title}</h2>
        {jobPost.location && <span> ({jobPost.location})</span>}
      </div>
      <p>{jobPost.description}</p>
      <div className="flex flex-row justify-around">
        <p>Posted: {new Date(jobPost.datePosted).toLocaleDateString()}</p>
        <p>Expires: {new Date(jobPost.expirationDate).toLocaleDateString()}</p>
      </div>
    </Link>
  );
};

export default JobPostPreview;
