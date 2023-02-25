import { tw } from "twind";

const About = () => {
  return (
    <div class={tw`text-white`}>
      <p>
        Hi, my name is <b>Kong</b>
      </p>
      <p>
        A software developer based in Sydney
      </p>
      <p>
        I am passionate about writing codes and <br />
        developing web applications to solve real-life challenges.
      </p>
    </div>
  );
};

export default About;
