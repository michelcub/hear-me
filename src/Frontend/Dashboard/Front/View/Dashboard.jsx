import { Calendar } from "../Components/Calendar"
import { CardAppointment } from "../Components/CardAppointment"
import { ClientCard } from "../Components/ClientCard"
import { DashboardSection } from "../Components/DashboardSection"
import { SectionClientCard } from "../Components/SectionClientCard"
import { WelcomeMessage } from "../Components/WelcomeMessage"

export const Dashboard = () => {
    return ( 
        <section className='flex w-full h-full px-4 pt-2 overflow-hidden'>
            <div className="w-[70%] h-full rounded-t-xl bg-gray p-4">
                <WelcomeMessage name='Olena'/>
                <DashboardSection/>
                <SectionClientCard>
                    <ClientCard/>
                    <ClientCard/>
                    <ClientCard/>
                    <ClientCard/>
                    <ClientCard/>
                    <ClientCard/>
                    <ClientCard/>
                </SectionClientCard>
            </div>

            <div className="w-[30%] h-full p-2">
                <article className="p-2 h-[40%]">
                    <Calendar/>
                </article>

                <div className="p-2 mt-4 ">
                    <h2 className="text-xl text-center">Visits for Today</h2>
                    <div className="flex flex-col flex-nowrap w-full p-2 overflow-y-auto h-[20rem]">
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