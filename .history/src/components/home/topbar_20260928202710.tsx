import vector  from "../../assets/vector.png"
function Topbar() {
    return (
        <div className="flex w-full h-11.5 bg-[#002B49]">
            <div className="flex item start">
                <img src={vector} alt="Vector" height={10} />

            </div>
        </div>
    ) 
} 
export default Topbar