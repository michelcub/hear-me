

export const WelcomeMessage = ({name}) => {
    return(
            <div className="w-full">
                <h1 className="mt-2 text-3xl font-semibold">Good day, {name}!</h1>
                <p className="mt-3 text-xs font-semibold">Your personal doctors office welcomes you, havea nice working day!</p>
            </div>

    )
}