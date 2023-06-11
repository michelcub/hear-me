import { Calendar } from "../Components/Calendar"
import { CardAppointment } from "../Components/CardAppointment"

export const Home = () => {
    return ( 
        <section className='flex w-full h-full px-4 pt-2 '>
            <div className="w-[70%] h-full rounded-t-xl bg-gray">

            </div>

            <div className="w-[30%] h-full p-2">
                <article className="p-2 h-[40%]">
                    <Calendar/>
                </article>

                <div className="p-2 mt-4 ">
                    <h2 className="text-xl text-center">Visits for Today</h2>
                    <div className="flex flex-col flex-wrap w-full h-full p-2">
                        <CardAppointment/>
                        <CardAppointment/>
                        <CardAppointment/>
                        <CardAppointment/>
                        <CardAppointment/>
                        <CardAppointment/>
                        <CardAppointment/>
                    </div>
                </div>
            </div>
        </section>
    )
}