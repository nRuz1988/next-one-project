import { Metadata } from "next";


/*
* SEP Friendly => Esto ayuda a los boot de gooogle para buscar algo  en especifico de 
*  esta pagina
* https://developers.google.com/search/docs/crawling-indexing/special-tags?hl=es-419
*/
export const metadata : Metadata = {
    title: 'SEO Contact',
    description: 'SEO Contact Page',
};

export default function ContactPage() {


    return (
        <>
           <span className="text-7xl">Hello Contac Page</span>
        </>
    )
}