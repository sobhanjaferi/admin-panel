import Aside from "@/features/Aside/Aside";

const Home = () => {
  return (
    <section className="grid grid-cols-5">
      <section className="col-span-1">
        <Aside />
      </section>

      <section className="col-span-4 p-5">
        <h1>hello world</h1>
      </section>
    </section>
  );
};

export default Home;
