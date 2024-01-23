export const ClientCard = () => {
    return(
        <article className="py-2 px-4 flex justify-between items-center w-full rounded-lg h-[3rem] bg-grey-light shadow-lg">
            <div className="flex items-center gap-2 p-0">
                <div className="w-[2rem] h-[2rem] rounded-full bg-grey-light p-0">
                <img className="object-cover w-full h-full" src="https://img2.freepng.es/20180626/fhs/kisspng-avatar-user-computer-icons-software-developer-5b327cc98b5780.5684824215300354015708.jpg" alt="" />
                </div>
                
                <p>Firstname</p>
            </div>
                <span className="text-xs font-semibold">Potential Opportunity</span>
                <div className="flex gap-3">
                    <a href=""><i className="bi bi-telephone-outbound"></i></a>
                    <a href=""><i className="bi bi-envelope"></i></a>
                </div>
        </article>
    )
}