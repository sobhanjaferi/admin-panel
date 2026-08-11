import Aside from "@/features/Aside/Aside";
import Header from "@/features/Header/Header";
import AuthContextProvider from "@/providers/AuthContextProvider";

const Home = () => {
  return (
    <section className="grid grid-cols-5">
      <section className="col-span-1">
        <AuthContextProvider>
          <Aside />
        </AuthContextProvider>
      </section>

      <section className="col-span-4">
        <Header />

        <section className="p-5">
          {/* ===== all content will be placed here without header ===== */}
        </section>
      </section>
    </section>
  );
};

export default Home;
