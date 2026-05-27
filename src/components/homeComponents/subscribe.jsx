
export default function Subscribe() {

  return (
    <section className="h-screen bg-black px-4">
      <div className="flex justify-center items-center h-full ">
        <div
          className="flex flex-col justify-center items-center bg-black w-full space-y-4 p-6 rounded-xl"
        >
          <p className="text-white text-sm sm:text-base font-bold text-center">
            NEVER MISS OUT, STAY UPDATED!
          </p>

          {/* <div className="flex  items-center justify-center ">
            <p>+234 88888888888</p>
            <input
              type="email"
              className="text-white border-2 rounded-l-full border-zinc-400 w-full max-w-md py-2 px-4 outline-none text-sm sm:text-base"
              placeholder="@email.com"
            />
            <div className="rounded-r-md bg-white p-2 md:p-3">
              <img className="w-5 h-5" src="/images/right.png" alt="" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
