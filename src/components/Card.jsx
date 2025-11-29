const Card = ({ title, disc, img, createdAt, link }) => {
    const date = new Date(createdAt);
    return (
        <div className="card">
            <div className="w-[90%] h-full flex flex-col justify-around">
                <h1 className="text-black dark:text-white">{title}</h1>
                <p className="text-black dark:text-white">{disc}</p>
                <p className="text-black dark:text-white">{`Date: ${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}</p>
                <a href={link}>
                    <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded-2xl hover:cursor-pointer w-full text-white transition-colors">
                        See More..
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Card;
