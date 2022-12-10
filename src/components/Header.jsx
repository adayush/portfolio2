function Header() {
    return (
        <div className="w-screen h-20 fixed px-10 py-6 bg-slate-800 text-slate-100">
            <div className="flex justify-between">
                <div className="font-medium text-2xl">
                    Ayush Dhingra
                </div>
                <div className="flex items-center gap-10">
                    <p>Home</p>
                    <p>About</p>
                    <p>Resume</p>
                </div>
                <div className="bg-slate-900 py-1 px-4 rounded-full flex items-center">
                    <p className= "text-base font-medium">Have a chat</p>
                </div>
            </div>
        </div>    
    );
}

export default Header;