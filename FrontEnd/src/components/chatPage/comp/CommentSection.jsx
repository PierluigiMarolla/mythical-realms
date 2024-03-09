import OtherUserComment from "./OtherUserComment";
import UserComment from "./UserComment";

export default function CommentSection() {
    return (
        <>
            <div className="text-center text-white cinzel text-2xl py-8">
                <p>Comments</p>
            </div>
            <div className="container-comments h-screen bg-scroll border-2 border-black rounded-md bg-opacity-70 overflow-y-scroll scrollbar scrollbar-scroll py-3 flex flex-col">
                    <UserComment/>
                    <OtherUserComment/>
                    <UserComment/>
                    <OtherUserComment/>
                    <UserComment/>
                    <OtherUserComment/>
                    <UserComment/>
                    <OtherUserComment/>
                    <UserComment/>
                    <OtherUserComment/>
                    <UserComment/>
                    <OtherUserComment/>
                    <UserComment/>
                    <OtherUserComment/>
                </div>
        </>
    )
}