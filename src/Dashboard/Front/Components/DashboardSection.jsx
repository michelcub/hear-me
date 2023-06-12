

export const DashboardSection = () => {
    return (
        <article>
            <h2 className="mt-5 text-lg font-semibold">Patient statistics</h2>
            <section className="flex justify-around w-full h-auto">
                <article className="h-auto p-3  rounded w-[30%]">
                    <p className="my-2 text-sm font-semibold text-center">Patients per month</p>
                    <div className="flex justify-around h-auto p-3 rounded bg-grey-light">
                        <i className="text-6xl bi bi-bar-chart-fill text-blue-light"></i>
                        <span className="self-center text-3xl font-semibold">54</span>
                        <span className="h-6 px-2 py-1 text-xs rounded bg-blue text-grey-light">+12%</span>
                    </div>  
                </article>  

                <article className="h-auto p-3  rounded w-[30%]">
                    <p className="my-2 text-sm font-semibold text-center">New patients</p>
                    <div className="flex justify-around h-auto p-3 rounded bg-grey-light">
                        <i className="text-6xl bi bi-bar-chart-fill text-blue-light"></i>
                        <span className="self-center text-3xl font-semibold">12</span>
                        <span className="h-6 px-2 py-1 text-xs rounded bg-blue text-grey-light">+12%</span>
                    </div>  
                </article>

                <article className="h-auto p-3  rounded w-[30%]">
                    <p className="my-2 text-sm font-semibold text-center">Satisfied patients</p>
                    <div className="flex justify-around h-auto p-3 rounded bg-grey-light">
                        <i className="text-6xl bi bi-bar-chart-fill text-blue-light"></i>
                        <span className="self-center text-3xl font-semibold">46</span>
                        <span className="h-6 px-2 py-1 text-xs rounded bg-blue text-grey-light">+12%</span>
                    </div>  
                </article>  
            </section>
        </article>
    )
}