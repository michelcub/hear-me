

export const CardClient = () => {
    return (
        <article className="flex items-center justify-between px-3 py-2 rounded-lg bg-grey-light shadow-lg">
                        <div className="flex items-center gap-4">
                            <div className="w-[2.5rem] h-[2.5rem] rounded-full flex items-center">
                                <img className="w-full h-full object-cover rounded-full" src="https://img2.freepng.es/20180626/fhs/kisspng-avatar-user-computer-icons-software-developer-5b327cc98b5780.5684824215300354015708.jpg" alt="" />
                            </div>
                            <p>First Name</p>
                        </div>
                        
                        <p>Oportunity Potentioal</p>
                        <p>23/04/2023</p>
                        <p>665889</p>
                        <div className="flex items-center gap-3">
                            <i className="bi bi-telephone"></i>
                            <i className="bi bi-envelope"></i>
                        </div>
                    </article>
    )
}