import vector  from "../../assets/vector.png"
function Topbar() {
    return (
        <div className="flex w-full h-11.5 bg-[#002B49]">
            <div className="px-15 pt-4">
                <img src={vector} alt="Vector" />

            </div>
            <div className=" text-[#67E8F9] font[inter] text-[14px] font-500 mt-3 my-20 ">
                <h1>Faith . Oppurtunity . Global impact</h1>
            </div>
        

        </div>
    ) 
} 
export default Topbar