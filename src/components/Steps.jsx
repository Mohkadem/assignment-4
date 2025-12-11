import { stepsCard } from "../../constants/index";

const Steps = () => {
    return (
        <section id="steps" className="mt-20 scroll-mt-20 overflow-hidden py-10">
            <div className="w-full md:px-20 px-4 sm:px-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-black dark:text-gray-200 mb-2">
                    Precise Steps Toward The End
                </h2>
                <p className="text-center text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    My Steps
                </p>

                <div className="mt-10 sm:mt-20 space-y-6 sm:space-y-10">
                    {stepsCard.map((step) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.title}
                                className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-gray-200 p-4 sm:p-6 rounded-xl dark:bg-blue-600"
                            >
                                <Icon className="text-3xl sm:text-4xl text-blue-500 shrink-0 mx-auto sm:mx-0" />
                                <div className="flex-1">
                                    <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-gray-200">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-black dark:text-gray-200 mt-1">
                                        {step.disc}
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                                        {step.days}
                                    </p>
                                    <ul className="mt-2 sm:mt-3 list-disc list-inside text-gray-700 dark:text-gray-300 text-sm sm:text-base space-y-1">
                                        {step.responsibility.map((r, i) => (
                                            <li key={i}>{r}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Steps;
