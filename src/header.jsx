import logo from "../logo1.png"

function Head(){
    return(
        <header>
        <div className="flex justify-between border-b items-center px-14">
            <img src={logo} className="w-28" />
            <div className="flex items-center w-44 justify-between ">
                <div className="text-xl "><i className="fa-regular fa-bell"></i></div>
            <div className="border rounded-full w-10 text-center p-2 text-base font-bold bg-sky-950 text-white ml-4">S</div>
            <div className="font-bold">Hi, Sunny<i class="fa-solid fa-angle-down"></i></div> </div>
        </div>
        </header>
    )
};

export default Head;