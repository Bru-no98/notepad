import { Link } from "react-router-dom"
import { DefaultButton } from "../DefaultButton/DefaultButton"


export function Dashboard () {
    return <div className='flex flex-col items-center h-dvh pt-[10%] px-[5%]'>
        <DefaultButton><Link to = '/'>Página Inicial</Link></DefaultButton>
        <div className = "h-[90%] bg-white w-full">
                    
        </div>
        
    </div>
}