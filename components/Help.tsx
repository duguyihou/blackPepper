import { tw } from "twind";

const cmds = [
  { cmd: "about", desc: "about Kong" },
  { cmd: "clear", desc: "clear the terminal" },
  { cmd: "email", desc: "send an email to me" },
  { cmd: "help", desc: "check available commands" },
  { cmd: "history", desc: "view command history" },
  { cmd: "projects", desc: "view projects that I've coded" },
  { cmd: "pwd", desc: "print current working directory" },
  { cmd: "welcome", desc: "display hero section" },
];
const Help = () => {
  return (
    <div class={tw`text-xs sm:text-sm md:text-base lg:text-lg`}>
      {cmds.map(({ cmd, desc }) => (
        <div key={cmd} class={tw`flex flex-row justify-between`}>
          <div class={tw`text-green-500 w-20`}>
            {cmd}
          </div>
          <div class={tw`text-white text-left flex-1`}>- {desc}</div>
        </div>
      ))}
    </div>
  );
};

export default Help;
