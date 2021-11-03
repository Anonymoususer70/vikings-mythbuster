import Allmyths from "./Allmyths";
import MythItem from "./MythItem";
import MythsHome from "./MythsHome";
import VikingIntro from "./VikingIntro";

function Myths() {
  return (
    <section className="main">

      <div>
        <MythsHome />
      </div>

    <div className="w-screen lg:w-50 mb-auto">
      <VikingIntro/>
    </div>

      {Allmyths.map((element) => {
        return (
          <MythItem
            title={element.title}
            subTitle={element.subTitle}
            description={element.description}
          />
        );
      })}
    </section>
  );
}

export default Myths;
