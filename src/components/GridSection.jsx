function GridSection() {
    return (
        <div className="px-10 pt-32 pb-20 text-white">
            <div className="grid grid-cols-3 gap-5">
                <div className="grid-card col-span-2">
                    <div className="mb-8">
                        Image
                    </div>
                    <div>
                        <h1 className="text-3xl mb-4">Hey, I'm Ayush 👋🏻</h1>
                        <h2 className="text-slate-300 text-xl">A Web developer and Notioner</h2>
                    </div>
                </div>
                <div className="grid-card">
                    grid 2
                </div>
                <div className="grid-card">
                    grid 2
                </div>
                <div className="grid-card">
                    grid 2
                </div>
                <div className="grid-card">
                    grid 2
                </div>
            </div>
        </div>    
    );
}

export default GridSection;