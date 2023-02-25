import { tw } from "twind";

const About = () => {
  return (
    <div class={tw`text-xs sm:text-sm md:text-base lg:text-lg text-white`}>
      <p>
        Hi, my name is <b>Kong</b>
      </p>
      <p>
        A software developer based in Sydney
      </p>
    </div>
  );
};

export default About;
