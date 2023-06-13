import { CardClient } from "../Components/CardClient"


export const PatientsView = () => {
    return (
        <section className="h-full w-full ps-3 pt-2 overflow-hidden">
            <section className="w-[40%] bg-grey-light h-full fixed border hidden">
                <section className="flex w-full justify-end p-3">
                    <span className=" flex items-center justify-center w-[2rem] h-[2rem] rounded-full hover:border"><i className="bi bi-x-lg"></i></span>
                </section>

            </section>
            <section className="bg-gray w-full h-full rounded-ss-xl">
                <section className="w-full p-4 flex justify-between">
                    <h1 className="text-xl font-semibold">Patients</h1>
                    <button className="bg-blue px-4 py-1 text-grey-light rounded-md">Add New</button>
                </section>
                <section className="w-full h-[89%] p-6">
                    <div className="flex items-center justify-between px-4 ms-20">
                        <p>Name</p>
                        <p className="ms-8">Reason for visit</p>
                        <p className="ms-16">Last visit</p>
                        <p>Patient ID</p>
                        <p>Contacts</p>
                    </div>
                    <section className="flex flex-nowrap flex-col gap-3 overflow-x-auto h-full mt-4 p-3">
                        <CardClient/>
                        <CardClient/>
                        <CardClient/>
                        <CardClient/>
                        <CardClient/>
                        <CardClient/>
                        <CardClient/>
                        <CardClient/>
                        <CardClient/>
                        <CardClient/>
                        <CardClient/>
                    </section>
                    
                </section>
            </section>
        </section>
    )
}