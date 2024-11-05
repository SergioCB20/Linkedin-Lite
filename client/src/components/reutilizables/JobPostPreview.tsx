import { JobPost } from "../../models/interfaces";

interface IJobPostPreview {
  jobPost: JobPost;
}

const JobPostPreview: React.FC<IJobPostPreview> = ({ jobPost }) => {
  return (
    <div className="flex flex-col gap-3 w-[70%] lg:w-[40%] border-2 border-black 
    p-[10px] cursor-pointer rounded-lg hover:bg-slate-100">
      <p className="font-bold">{jobPost.company.name}</p>
      <div className="flex flex-row justify-between pe-[20px]">
        <h2 className="font-bold text-xl">{jobPost.title}</h2>
        {jobPost.location && <span> ({jobPost.location})</span>}
      </div>
      <p>{jobPost.description}</p>
      <div className="flex flex-row justify-around">
        <p>Posted: {new Date(jobPost.datePosted).toLocaleDateString()}</p>
        <p>Expires: {new Date(jobPost.expirationDate).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default JobPostPreview;
