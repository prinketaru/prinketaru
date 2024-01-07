import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProjectsList from "@/components/projects_list";

const Projects = () => {
  return (
    <div>
      <div className="max-w-[90%] mx-auto">
        <Navbar />
        <div className="flex justify-center items-center">
          <ProjectsList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
