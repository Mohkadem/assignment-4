const Card = ({ title, disc, img, createdAt, link }) => {
    const date = new Date(createdAt);
    return (
        <div className="card">
            <div className="w-full sm:w-[90%] h-full flex flex-col justify-around gap-2 sm:gap-4">
                <h1 className="text-black text-sm sm:text-base font-semibold">{title}</h1>
                {disc && <p className="text-black text-xs sm:text-sm">{disc}</p>}
                <p className="text-black text-xs sm:text-sm">{`Date: ${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="mt-2">
                    <button className="bg-blue-500 hover:bg-blue-600 p-2 sm:p-3 rounded-2xl hover:cursor-pointer w-full text-white transition-colors text-xs sm:text-sm">
                        See More..
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Card;
