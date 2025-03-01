import Coffee1 from '../../public/Coffee1.svg';
import Coffee2 from '../../public/Coffee2.svg';
import Coffee3 from '../../public/Coffee3.svg';
import Coffee4 from '../../public/Coffee4.svg';
import Coffee5 from '../../public/Coffee5.svg';
import Coffee6 from '../../public/Coffee6.svg';
import Coffee7 from '../../public/Coffee7.svg';
import Coffee8 from '../../public/Coffee8.svg';
import Coffee9 from '../../public/Coffee9.svg';
import Coffee10 from '../../public/Coffee10.svg';
import Coffee11 from '../../public/Coffee11.svg';
import Coffee12 from '../../public/Coffee12.svg';
import Coffee13 from '../../public/Coffee13.svg';
import Coffee14 from '../../public/Coffee14.svg';

import { VscAdd } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";

export default function Coffee() {

    const cafesList = [
        { 
            id: 1, 
            logo: Coffee1,
            tag: 'Tradicional', 
            nome: 'Expresso Tradicional',
            discretion: 'O tradicional café feito com água quente e grãoes moídos',
            valor: '9,90',
       },
       {
            id: 2, 
            logo: Coffee2,
            tag: 'Tradicional', 
            nome: 'Expresso Americano',
            discretion: 'Expresso diluído, menos intenso que o tradicional',
            valor: '9,90',
       },
       {
            id: 3, 
            logo: Coffee3,
            tag: 'Tradicional', 
            nome: 'Expresso Cremoso',
            discretion: 'Café expresso tradicional com espuma cremosa',
            valor: '9,90',
       },
       {
            id: 4, 
            logo: Coffee4,
            tag: ['Tradicional', 'Gelado'], 
            nome: 'Expresso Gelado',
            discretion: 'Bebida preparada com café expresso e cubos de gelo',
            valor: '9,90',
       },
       {
            id: 5, 
            logo: Coffee5,
            tag: ['Tradicional', 'Com leite'], 
            nome: 'Café com leite',
            discretion: 'Meio a meio de expresso tradicional com leite vaporizado',
            valor: '9,90',
       },
       {
            id: 6, 
            logo: Coffee6,
            tag: ['Tradicional', 'Com leite'], 
            nome: 'Latte',
            discretion: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
            valor: '9,90', 
       },
       {
            id: 7, 
            logo: Coffee7,
            tag: ['Tradicional', 'Com leite'], 
            nome: 'Capuccino',
            discretion: 'Bebida com canela feita de doses iguais de café, leite e espuma',
            valor: '9,90',
       },
       {
            id: 8, 
            logo: Coffee8,
            tag: ['Tradicional', 'Com leite'], 
            nome: 'Macchito',
            discretion: 'Café expresso misturado com um pouco de leite quente e espuma',
            valor: '9,90',
       },
       {
            id: 9, 
            logo: Coffee9,
            tag: ['Tradicional', 'Com leite'], 
            nome: 'Mocaccino',
            discretion: 'Café expresso com calda de chocolate, pouco leite e espuma',
            valor: '9,90',
       },
       {
            id: 10, 
            logo: Coffee10,
            tag: ['Especial', 'Com leite'], 
            nome: 'Chocolate Quente',
            discretion: 'Bebida feita com chocolate dissolvido no leite quente e café',
            valor: '9,90',
       },
       {
            id: 11, 
            logo: Coffee11,
            tag: ['Especial', 'Alcoólico', 'Galado'], 
            nome: 'Cubano',
            discretion: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
            valor: '9,90',
       },
       {
            id: 12, 
            logo: Coffee12,
            tag: 'Especial', 
            nome: 'Havaiano',
            discretion: 'Bebida adocicada preparada com café e leite de coco',
            valor: '9,90',
       },
       {
            id: 13, 
            logo: Coffee13,
            tag: 'Especial', 
            nome: 'Árabe',
            discretion: 'Bebida preparada com grãos de café árabe e especiarias',
            valor: '9,90',
       },
       {
            id: 14, 
            logo: Coffee14,
            tag: ['Especial', 'Alcoólico'], 
            nome: 'Irlandês',
            discretion: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
            valor: '9,90',
       }         
    ]

    return(
        <div>
            {cafesList.map(cafes => 
                <>
                    <img key={cafes.id} src={cafes.logo}/>

                    <div>
                        <span>{cafes.tag}</span>
                        <h2>{cafes.nome}</h2>
                        <p>{cafes.discretion}</p>
                    </div>
                    <div>
                        <p>R${cafes.valor}</p>
                        <div>
                            <button>
                                <VscChromeMinimize />
                            </button>
                            <p>
                                1
                            </p>
                            <button>
                                <VscAdd />
                            </button>
                        </div>
                        <button>

                        </button>
                    </div>
                </>   
            )}            
           
        </div>
    )
}