function VikingIntro() {
    return (
    <section>
      <article className="intro">
        <div
          className="heading 
          text-6xl sm:text-5xl text-center
          tracking-wide 
          flex justify-center 
          py-20
          sm:max-w-xs 
          ml-4 "
        >
          <h1 className="myth-heading">Who were Vikings?</h1>
        </div>
        <div
          className=" desc
          text-xl sm:text-lg 
          max-w-prose sm:max-w-none
          mx-auto sm:ml-5 lg:ml-10
          -mt-7"
        >
          <p className="myth-desc font-medium">Vikings is the modern name given to seafaring people primarily from Scandinavia (present-day Denmark, Norway and Sweden), who from the late 8th to the late 11th centuries  traded, settled, raided and pirated, throughout parts of Europe. They also voyaged as far as the Mediterranean, North Africa, the Middle East, and North America. In some of the countries they raided and settled in, this period is popularly known as the Viking Age, and the term "Viking" also commonly includes the inhabitants of the Scandinavian homelands as a collective whole. The Vikings had a profound impact on the early medieval history of Scandinavia, the British Isles, France, Estonia, and Kievan Rus'.</p>
        </div>
      </article>
    </section>
    )
}

export default VikingIntro
