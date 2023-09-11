const Applications = () => {
  return (
    <div className="w-full h-fit bg-lime-200 py-4 px-12 gap-8 flex flex-wrap">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="w-40 h-40 bg-slate-50 flex items-center justify-center"
        >
          CAN
        </div>
      ))}
    </div>
  );
};

export default Applications;
