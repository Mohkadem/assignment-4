import { stepsCard } from "../../constants/index";

const Steps = () => {
    return (
        <section id="steps" className="mt-20 scroll-mt-20 overflow-hidden">
            <div className="w-full md:px-20 px-5">
                <h2 className="text-3xl font-bold text-center text-black dark:text-white">
                    Precise Steps Toward The End
                </h2>
                <p className="text-center text-gray-700 dark:text-gray-400">
                    My Steps
                </p>

                <div className="mt-20 space-y-10">
                    {stepsCard.map((step) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.title}
                                className="flex items-start gap-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl"
                            >
                                <Icon className="text-4xl text-blue-500 shrink-0" />
                                <div>
                                    <h3 className="text-xl font-semibold text-black dark:text-white">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        {step.disc}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                        {step.days}
                                    </p>
                                    <ul className="mt-3 list-disc list-inside text-gray-700 dark:text-gray-300">
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
