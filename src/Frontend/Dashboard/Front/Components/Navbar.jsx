import { Link } from "react-router-dom";
import { useState } from "react";
export const Navbar = () => {
    const [active, setActive] = useState('');

    const handleActiveMenu = (e) => {
        const element = e.target.id;
        setActive(element);
    }


    return (
        <header className="h-screen p-4">
            <span className="p-4 mt-5 text-2xl text-blue">
              <i className="text-4xl fa-solid fa-ear-listen "></i> Hear-Me
            </span>
            <nav>
              <ul className="flex flex-col gap-4 p-4 mt-5 ">
                <li className={`px-3 text-md  ${active === 'dashboardNav'? 'bg-blue-light rounded': '' }`} onClick={handleActiveMenu} id="dashboardNav">
                  <Link className="flex items-center gap-3" to="/" onClick={handleActiveMenu} id="dashboardNav"><i className="text-2xl bi bi-grid"></i> Dashboard</Link>
                </li>
                
                <li className={`px-3 text-md  ${active === 'patientsNav'? 'bg-blue-light rounded': '' }`} onClick={handleActiveMenu} id="patientsNav">
                    <Link className="flex items-center gap-3" to="/patients" id="patientsNav"><i className="text-2xl bi bi-people"></i> Patients</Link>  
                  
                </li>
                <li className={`px-3 text-md ${active === 'calendarNav'? 'bg-blue-light rounded': '' }`} onClick={handleActiveMenu} id="calendarNav">
                <Link className="flex items-center gap-3" to="/" id="calendarNav"><i className="text-2xl bi bi-calendar-date"></i> Calendar</Link>
                  
                </li>
                <li className={`px-3 text-md ${active === 'remainsNav'? 'bg-blue-light rounded': '' }`} onClick={handleActiveMenu} id="remainsNav">
                <Link className="flex items-center gap-3" to="/" id="remainsNav"><i className="text-2xl bi bi-box-seam"></i> Remains</Link>
                  
                </li>
                <li className={`px-3 text-md ${active === 'archiveNav'? 'bg-blue-light rounded': '' }`} onClick={handleActiveMenu} id="archiveNav">
                <Link className="flex items-center gap-3" to="/" id="archiveNav"><i className="text-2xl bi bi-folder2-open"></i> Archive</Link>
                  
                </li>
                <li className={`px-3 text-md ${active === 'statisticsNav'? 'bg-blue-light rounded': '' }`} onClick={handleActiveMenu} id="statisticsNav">
                <Link className="flex items-center gap-3" to="/" id="statisticsNav"><i className="text-2xl bi bi-bar-chart"></i> Statistics</Link>
                  
                </li>
                <li className={`px-3 text-md ${active === 'messageNav'? 'bg-blue-light rounded': '' }`} onClick={handleActiveMenu} id="messageNav">
                <Link className="flex items-center gap-3" to="/" id="messageNav"><i className="text-2xl bi bi-chat-text"></i> Message</Link>
                  
                </li>
                <li className={`px-3 text-md ${active === 'settingsNav'? 'bg-blue-light rounded': '' }`} onClick={handleActiveMenu} id="settingsNav">
                <Link className="flex items-center gap-3" to="/" id="settingsNav"><i className="text-2xl bi bi-tools"></i> Settings</Link>
                  
                </li>
                <li className={`px-3 text-md ${active === 'helpNav'? 'bg-blue-light rounded': '' }`} onClick={handleActiveMenu} id="helpNav">
                <Link className="flex items-center gap-3" to="/" id="helpNav"><i className="text-2xl bi bi-question-circle"></i> Help</Link>
                  
                </li>
              </ul>
            </nav>
          </header>
    )
}