import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { send, sendHover } from "../assets";

const Contact = () => {
  return (
    <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
        variants={slideIn("left", "tween", 0.2, 1)}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <div className="mt-10 flex flex-col gap-6 font-poppins">
          <div className="flex flex-col">
            <span className="text-timberWolf font-medium mb-2">Email:</span>
            <span className="text-white">Nikunjkumargarg98@gmail.com</span>
          </div>
          <div className="flex flex-col">
            <span className="text-timberWolf font-medium mb-2">Phone:</span>
            <span className="text-white">+91 8950377998</span>
          </div>
          <div className="flex flex-col">
            <span className="text-timberWolf font-medium mb-2">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/nikunjkgarg/"
              className="text-blue-400 underline"
            >
              Visit My LinkedIn Profile
            </a>
          </div>
          <div className="flex flex-col">
            <span className="text-timberWolf font-medium mb-2">GitHub:</span>
            <a
              href="https://github.com/Nikunjkumargarg"
              className="text-blue-400 underline"
            >
              Visit My Github Profile
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
