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
    <div>
      {cmds.map(({ cmd, desc }) => (
        <div key={cmd} class={tw`flex flex-row justify-between`}>
          <div class={tw`text-green-500 w-16 sm:w-20 md:w-24`}>
            {cmd}
          </div>
          <div class={tw`text-white text-left flex-1`}>- {desc}</div>
        </div>
      ))}
    </div>
  );
};

export default Help;
