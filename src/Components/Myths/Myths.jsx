import "./Myths.css"

let MythOne = {
    title: "Myths Created by web series 'Vikings'",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum, quasi ut consequatur explicabo blanditiis quod odio deleniti consectetur unde ad. Veniam doloremque, hic quo ipsam ad vero provident adipisci."
  }

function Myths() {
    return (
        <section className="main">
        <div className="
        heading text-5xl flex justify-center py-20
        sm:max-w-xs ml-4 text-center">
            <h1>{MythOne.title}</h1>
        </div>
        <div className="
         text-3xl flex justify-center max-w-screen-md mx-auto -mt-7
         lg:ml-10 max-w-2xl
         md:text-xl -mt-7 mr-10 text-center
         sm:text-xl -mt-7 ml-6 max-w-none"
         >
        <p className = "">{MythOne.description}</p>
        </div>
        </section>
    )
}

export default Myths
