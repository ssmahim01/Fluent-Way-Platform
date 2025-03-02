const loading = () => {
    return (
        <div className="flex justify-center items-center lg:pt-40 pt-32">
            <p className="animate-bounce text-lg text-neutral-700 dark:text-neutral-300 font-semibold">Loading <span className="animate-ping">...</span></p>
        </div>
    );
};

export default loading;