import plusSVG from "../../../assets/svg/plus-solid.svg";
import CharacterCard from "./CharacterCard";


export default function CharacterSection() {


    return (
        <>
            <div className="container-home w-2/5 bg-scroll border-2 border-black rounded-md bg-opacity-70 overflow-y-scroll scrollbar scrollbar-ancient">
                <div className="flex justify-between mx-5 items-center my-2 ">
                    <p className="text-3xl cinzel">Character</p>
                    <button>
                        <img className="bg-scroll p-2 w-10 rounded-md border border-ancient" src={plusSVG} />
                    </button>
                </div>
                <div className="flex justify-around flex-wrap">
                    <CharacterCard ctrName="Character Name Placeholder"/>
                    <CharacterCard ctrName="Character Name Placeholder"/>
                    <CharacterCard ctrName="Character Name Placeholder"/>
                    <CharacterCard ctrName="Character Name Placeholder"/>
                    <CharacterCard ctrName="Character Name Placeholder"/>
                    <CharacterCard ctrName="Character Name Placeholder"/>
                    <CharacterCard ctrName="Character Name Placeholder"/>
                    <CharacterCard ctrName="Character Name Placeholder"/>
                    <CharacterCard ctrName="Character Name Placeholder"/>
                    <CharacterCard ctrName="Character Name Placeholder"/>
                    <CharacterCard ctrName="Character Name Placeholder"/>
                    <CharacterCard ctrName="Character Name Placeholder"/>
                    <CharacterCard ctrName="Character Name Placeholder"/>
                    <CharacterCard ctrName="Character Name Placeholder"/>
                    <CharacterCard ctrName="Character Name Placeholder"/>
                    <CharacterCard ctrName="Character Name Placeholder"/>
                    <CharacterCard ctrName="Character Name Placeholder"/>
                    <CharacterCard ctrName="Character Name Placeholder"/>
                    <CharacterCard ctrName="Character Name Placeholder"/>

                </div>
            </div>
        </>
    )
}