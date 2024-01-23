

export const Head = () => {
    return (
        <section className="flex w-full h-16 align-center">
            <div className="flex h-full p-4  align-center w-[70%]">
                <input className=" w-full h-[2.3rem] rounded bg-gray  border-none" type='text' name="searchHead" placeholder="  Search"/>
            </div>
            <div className="flex  h-full align-center w-[30%]">
                <nav className="flex w-full h-full align-center">
                    <ul className="flex gap-4 m-auto align-center">
                        <li className="p-0"><i className="p-2 text-2xl bi bi-bell"></i></li>
                        <li className="p-0"><i className="p-2 text-2xl bi bi-chat-dots"></i></li>
                        <li className="w-9 h-9 rounded-full">
                            <img src="https://img2.freepng.es/20180626/fhs/kisspng-avatar-user-computer-icons-software-developer-5b327cc98b5780.5684824215300354015708.jpg" alt=""  className="w-full h-full object-cover rounded-full"/>
                        </li>
                        <li className="flex p-0 align-center mt-1"><p className="m-0 text-xl">Olena</p></li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}