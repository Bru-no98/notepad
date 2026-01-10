
    type Props = {
        children: React.ReactNode;
        className?: string;
    }


export function DefaultButton({children, className}: Props){
    
    return (
        <p className={`className= text-[#2F4F7C] border-1 rounded-md w-48 text-center ${className}`}>
            {children}
        </p>
    )
    
}