/* eslint-disable react/prop-types */
function NavBar({ quiz = "" }) {
  return (
    <div className="flex items-center justify-between border pt-7 pb-6">
      <section className="flex items-center gap-5">
        {/* <section className="border py-1.5 px-1">
          <img src="/src/assets/icon-html.svg" className="w-8 " alt="" />
        </section> */}
        <p className="text-xl font-bold text-almostDark tracking-wide">
          {quiz}
        </p>
      </section>

      {/* theme switch */}
      <section className="flex items-center gap-3.5">
        <img src="/src/assets/icon-sun-dark.svg" alt="" />
        <form className="bg-pink w-fit p-1 flex items-center gap-3 rounded-full">
          <input type="radio" name="theme" className="radio" />
          <input type="radio" name="theme" className="radio" />
        </form>
        <img src="/src/assets/icon-moon-dark.svg" alt="" />
      </section>
    </div>
  );
}

export default NavBar;
