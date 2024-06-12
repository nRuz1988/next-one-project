"use client";

/***** NOTA IMPORTANTE ************* 
  use_client => Esto indica que este trozo de codigo se ejecutara por el lado del cliente ya que 
  en next todo los componente se ejecutar del lado del servidor ()
*/
import Link from 'next/link'
import { usePathname } from 'next/navigation';

import styleLink from './css/ActiveLink.module.css';


interface Props {
    path : string;
    text : string;
}

export const ActiveLink = ({path,text}:Props) => {

  //se utliza para sacar el path actual
  const pathName = usePathname();

  console.log('val-'+pathName+'-'+path);

  return (
    <>
       <Link 
          className={`${styleLink.link}  ${ (pathName === path) && styleLink['active-link'] }  `}          
          href={path} >
            {text}
      </Link> 
    </>
  )
}
