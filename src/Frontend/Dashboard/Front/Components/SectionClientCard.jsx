

export const SectionClientCard = ({children}) => {
    return(
        <section className="w-full h-full">
            <h4 className="mt-2 text-lg font-semibold">Available patients</h4>
                <section className="w-full h-full p-2">
                    <div className="flex justify-between px-10 py-2">
                        <span className="text-xs">Name</span>
                        <span className="text-xs">Reason for visit</span>
                        <span className="text-xs">Contacts</span>
                    </div>
                    <section className="flex flex-col flex-nowrap w-full p-2 overflow-y-auto h-[18rem] gap-3">
                        {children}
                    </section>
                </section>
        </section>

    )
}