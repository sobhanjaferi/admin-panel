"use client";

const LoadingSkeleton = () => {
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-2xl">Loading</h1>

      <section className="w-12 h-12 bg-linear-to-l from-gray-300 via-gray-300 to-gray-600 rounded-full flex justify-center items-center animate-spin">
        <section className="w-10 h-10 bg-gray-100 rounded-full"></section>
      </section>
    </section>
  );
};

export default LoadingSkeleton;
