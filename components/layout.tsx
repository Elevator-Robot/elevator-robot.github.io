import NavBar from "../components/nav";
type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
export default Layout;
