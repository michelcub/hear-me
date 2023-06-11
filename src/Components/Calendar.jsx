

export const Calendar = () => {

    const arrayCalendar = [];
    for(let i = 1; i<=31; i++){
        arrayCalendar.push(i);
        console.log(arrayCalendar) ;
    }

    return (
        <div className="grid w-full h-full grid-cols-7 p-2 border-2 shadow-2xl rounded-xl border-gray">
            <span className="flex items-center justify-center">L</span>
            <span className="flex items-center justify-center">M</span>
            <span className="flex items-center justify-center">Mie</span>
            <span className="flex items-center justify-center">J</span>
            <span className="flex items-center justify-center">V</span>
            <span className="flex items-center justify-center">S</span>
            <span className="flex items-center justify-center">D</span>
           {arrayCalendar.map(item => <span key={item} className="flex items-center justify-center text-center rounded-full hover:bg-blue-light">{item}</span>)}                 
        </div>
    )
}