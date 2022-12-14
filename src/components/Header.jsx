import Typeform from "./Typeform";

function Header() {
    return (
        <div className="w-screen z-50 bg-slate-900 h-20 fixed px-5 md:px-10 py-5 text-slate-100">
            <div className="flex justify-between h-full max-w-7xl m-auto">
                <div className="flex items-center font-medium text-2xl">
                    <p className="transition-all hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Ayush Dhingra</p>
                </div>
                <div className="hidden items-center gap-10">
                    <p>About</p>
                    <a href="https://drive.google.com/file/d/12sAqtcigRGFRmw31tdFWUqaWR1687NJ3/view?usp=sharing" target="_blank">Resume</a>
                    <p>Freelance</p>
                </div>
                <div className="bg-slate-800 hover:bg-slate-700 py-3 px-4 rounded-full flex items-center">
                    <Typeform className="text-base font-medium">💬 Let's chat</Typeform>
                </div>
            </div>
        </div>    
    );
}

export default Header;