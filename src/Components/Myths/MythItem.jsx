import "./Myths.css";

function MythItem({ title, subTitle, description }) {
  return (
    <section>
      <article className="myths ">
        <div
          className="heading 
          text-6xl sm:text-5xl text-center
          tracking-wide 
          flex justify-center 
          py-20
          sm:max-w-xs 
          ml-4 
          mt-7"
        >
          <h1 className="myth-heading">{title}</h1>
        </div>
        <div
          className=" desc
          text-xl sm:text-lg 
          max-w-prose sm:max-w-none
          mx-auto sm:ml-5 lg:ml-10
          -mt-9
          mb-6"
        >
          <h2 className="sub-heading text-3xl sm:text-2xl font-bold">
            {subTitle}
          </h2>
          <p className="myth-desc font-medium">{description}</p>
        </div>
      </article>
    </section>
  );
}

export default MythItem;
