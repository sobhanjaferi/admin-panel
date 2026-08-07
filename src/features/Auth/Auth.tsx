import Image from "next/image";
import Form from "./Form";

const Auth = () => {
  return (
    <section className="bg-linear-to-r from-blue-900 via-blue-600 to-blue-900 w-screen h-screen flex justify-center items-center relative">
      <Image
        src={"/image.png"}
        alt="img1"
        width={2000}
        height={2000}
        className="w-40 absolute top-13 left-120"
      />
      <Image
        src={"/image copy.png"}
        alt="img1"
        width={2000}
        height={2000}
        className="w-100 absolute bottom-30 right-0"
      />
      <Image
        src={"/image copy.png"}
        alt="img1"
        width={2000}
        height={2000}
        className="w-35 absolute bottom-80 right-150"
      />
      <Image
        src={"/image copy.png"}
        alt="img1"
        width={2000}
        height={2000}
        className="w-30 absolute bottom-68 right-140"
      />
      <Image
        src={"/image copy 2.png"}
        alt="img1"
        width={2000}
        height={2000}
        className="w-110 absolute bottom-0 left-20"
      />
      <Image
        src={"/image copy 2.png"}
        alt="img1"
        width={2000}
        height={2000}
        className="w-100 absolute top-50 right-120 opacity-70"
      />
      <Image
        src={"/image copy 3.png"}
        alt="img1"
        width={2000}
        height={2000}
        className="w-50 absolute top-70 left-142"
      />
      <Image
        src={"/image copy 3.png"}
        alt="img1"
        width={2000}
        height={2000}
        className="w-35 absolute top-100 left-135"
      />
      <Image
        src={"/image copy 4.png"}
        alt="img1"
        width={2000}
        height={2000}
        className="w-60 absolute bottom-30 left-155"
      />
      <Image
        src={"/image copy 5.png"}
        alt="img1"
        width={2000}
        height={2000}
        className="w-40 absolute bottom-38 left-148"
      />

      <section className="w-7/10 h-8/10 rounded-2xl bg-linear-to-l from-black/30 via-black/5 to-black/30 flex justify-center items-center">
        <section className="w-120 h-8/10 rounded-3xl bg-white/10 backdrop-blur-[7px] border border-white/30 flex flex-col justify-center items-center gap-10 transition-all duration-300 ease-in-out text-white shadow shadow-white hover:shadow-2xl hover:-translate-y-2">
          <h1 className="text-3xl font-bold">Wellcome</h1>

          <section className="flex flex-col justify-between items-start gap-10 w-7/10">
            <h2 className="text-2xl font-bold">Login</h2>

            <Form />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Auth;
