import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col bg-future-image bg-cover bg-center bg-no-repeat">
      <div className="flex-grow container mx-auto flex items-center">
        <div className="w-full">
          <div className="text-center xl:text-left">
            <span className="text-xl">Serverless GCP Expertise</span>
            <h1 className="h1 mb-6">
              Welcome to <br /> <span className="text-white">Cloud Blueprints</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white mx-auto xl:mx-0">
            We focus on building blueprints for secure and performant serverless applications, giving you a deep understanding of the services you use and how to optimize them.
            </p>
            {/* socials */}
            <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-8">
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-white rounded-full flex justify-center items-center text-white text-base hover:bg-white hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
