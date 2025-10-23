import '../../styles/global.css';

import { Link } from 'react-router-dom';

export function InitialPage () {

    return <>
        <div className="w-full h-dvh flex flex-col justify-center items-center gap-3.5">
            <h1 className= "text-6xl font-lora text-[#6495ED]">Bloco de notas</h1>
            <div className='flex flex-col items-center gap-3'>
                <div className='p-<80> border '>
                    <Link className='text-[#2F4F7C]'  to="/notesform">Formulário de Notas</Link>
                </div>
                
                <Link className='inline-block text-[#2F4F7C] border px-10' to="/dashboard">DashBoard</Link>   
            </div>
            
        </div>
    </>
}