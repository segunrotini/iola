import vector  from "../../assets/vector.png"
function Topbar() {
    return (
        <div className="flex w-full h-11.5 bg-[#002B49]">
            <div className="items-center justify-start">
                <img src={vector} alt="Vector" />

            </div>
        </div>
    ) 
} 
export default Topbar