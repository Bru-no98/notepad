import '../../styles/global.css';

import { Link } from 'react-router-dom';
import { DefaultButton } from '../DefaultButton/DefaultButton';

export function InitialPage () {

    return <>
        <div className="w-full h-dvh flex flex-col justify-center items-center gap-3.5">
            <h1 className= "text-6xl font-lora text-[#6495ED]">Bloco de notas</h1>
            <div className='flex flex-col items-center gap-3'>
            
                <Link to="/notesform">
                    <DefaultButton className='w-48'>Formulário de Notas</DefaultButton>
                </Link>
                
                <Link to="/dashboard">
                    <DefaultButton className='w-48'>DashBoard</DefaultButton>
                </Link>

            </div>
            
        </div>
    </>
}