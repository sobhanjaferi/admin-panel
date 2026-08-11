import Aside from "@/features/Aside/Aside";
import AuthContextProvider from "@/providers/AuthContextProvider";

const Home = () => {
  return (
    <section className="grid grid-cols-5">
      <section className="col-span-1">
        <AuthContextProvider>
          <Aside />
        </AuthContextProvider>
      </section>

      <section className="col-span-4 p-5">
        <h1>hello world</h1>
      </section>
    </section>
  );
};

export default Home;
