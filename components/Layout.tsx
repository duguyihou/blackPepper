type Props = {
  children: preact.ComponentChildren;
};

const Layout = ({ children }: Props) => {
  return <div className="p-4 mx-auto max-w-screen-md">{children}</div>;
};

export default Layout;
