import { NavLink } from "react-router-dom";
import plusSVG from "../../../assets/svg/plus-solid.svg";
import CharacterCard from "./CharacterCard";


export default function CharacterSection() {


    return (
        <>
            <div className="relative container-home w-full md:w-1/3 bg-scroll border-2 border-black rounded-md mt-10 sm:mt-0 md:bg-opacity-70 overflow-y-scroll scrollbar scrollbar-ancient">
                <div className="flex  justify-between mx-5 items-center my-2">
                    <p className="text-3xl cinzel">Character</p>
                    <NavLink to={"/userCharacterAdd"}>
                        <button>
                            <img className="bg-scroll p-2 w-10 rounded-md border border-ancient" src={plusSVG} />
                        </button>
                    </NavLink>
                </div>
                <div className="flex justify-around flex-wrap">
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                    <NavLink to={"/userCharacterEdit"}><CharacterCard ctrName="Character Name Placeholder" /></NavLink>
                </div>
            </div>
        </>
    )
}