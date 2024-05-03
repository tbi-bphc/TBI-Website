function Header() {
    return (
        <header className="bg-gray-800 py-4 lg:px-[50vh] md:px-[10vh] px-2">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <p className="h-8 w-auto mr-4 text-white"> TBI  </p>
                </div>
                <div className="flex items-center text-white">
                    <p className="h-8 w-auto mr-4"> BITS </p>
                </div>
            </div>
        </header>
    );
}

export default Header;
