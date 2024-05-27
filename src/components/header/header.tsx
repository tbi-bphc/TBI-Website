function Header() {
    return (
        <header className=" bg-nord4 py-4 lg:px-[55vh] md:px-[10vh] px-2">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    {/* <p className="h-8 w-auto mr-4 text-white"> TBI  </p> */}
                    <img src="/tbislogoblue 3.png" alt="" className="w-40 h-24" />
                </div>
                <div className="flex items-center text-white">
                    {/* <p className="h-8 w-auto mr-4"> BITS </p> */}
                    <img src="/BITS_Pilani-Logo 4.png" alt="" className="w-24 h-24" />

                </div>
            </div>
        </header>
    );
}

export default Header;
