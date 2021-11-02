import "./Myths.css";
import Allmyths from "./Allmyths";
import MythsHome from "./MythsHome";

function Myths() {
  return (
    <section className="main">
      <div>
        <MythsHome />
      </div>
      <article className="myths ">
        <div
          className="
        heading text-6xl tracking-wide flex justify-center py-20
        sm:max-w-xs ml-4 text-center"
        >
          <h1>{Allmyths[0].title}</h1>
        </div>
        <div
          className=" desc
         text-xl max-w-prose absolute ml-50 -mt-7 
         md:text-xl max-w-none -mt-7 mr-20 
         sm:text-xl -mt-7 ml-6 max-w-none"
        >
          <h2 className="text-3xl font-bold">{Allmyths[0].subTitle}</h2>
          <p className="font-medium">{Allmyths[0].description}</p>
        </div>
      </article>
    </section>
  );
}

export default Myths;
