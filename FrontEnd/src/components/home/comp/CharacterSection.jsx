import plusSVG from "../../../assets/svg/plus-solid.svg";

export default function CharacterSection() {


    return (
        <>
            <div className="container-home w-2/5 bg-scroll border-2 border-ancient rounded-md bg-opacity-70">
                <div className="flex justify-between mx-5 items-center my-2 ">
                    <p className="text-white text-2xl cinzel">Character</p>
                    <button>
                        <img className="bg-scroll p-2 w-10 rounded-md border border-ancient" src={plusSVG} />
                    </button>
                </div>
               
            </div>
        </>
    )
}