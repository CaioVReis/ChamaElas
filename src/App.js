import {Navbar} from './components/NavBar';
import './App.css';
import { GifMovie } from './components/video';
import { TextP } from './components/TextP';
import { Stores } from './components/Store';
import { Cards } from './components/Cards';
import ImgEqp from './ImgEquipe';
import { LogoLinks } from './Logos';
import { LogoCE } from './components/ChamaELasLg';
import NavBarFlow from './components/NavBarFlow';

function App() {
  return (
    <>
    <div className='PinkRose w-screen border-2 border-pink-700  md:w-screen md:h-screen'> 

    <div>
      <Navbar/>
 <NavBarFlow/>
    </div>
    <div className='md:w-screen md:h-full flex flex-col'>
      <div className='md:w-2/5  h-10 mt-40 ml-10'><TextP/></div>
    
    <div className=' md:w-1/2 h-10   md:ml-96 md:mt-12 '><GifMovie /></div>
     <div className='md:w-52 h-36 md:-mt-12  md:mt-32  mt-10 '>
      <Stores/>
     </div>
   
      </div>
      
    </div>
    
    <div className='md:w-screen  h-screen'>

     <div className='md:mt-10  mt-16 '>
        <header className="text-center md:mx-auto mb-12 lg:px-20  ml-44 ">
        <h2 className="-ml-52 md:-ml-16 md:text-2xl md:leading-normal md:mb-2 font-bold text-black">Atendimento Exclusivo!</h2>
        < p className=" -ml-52 md:-ml-20 text-gray-500 leading-relaxed font-light text-xl md:mx-auto pb-2">Conheça Todos<br/>Nossos Atendimentos.!</p>
      </header>
     </div>
     <div className="flex flex-wrap w-screen   md:-mx-4 text-center">

  
  <Cards tittle="Kids" disc="Mais Conforto e Segurança para seus Filhos." svg="Kids"/>
  <Cards tittle="Mercado" disc="Levamos sua compra no mercado o Mais rapido ate voce" svg="Mercado"/>
  <Cards tittle="Pets" disc="Precisa Levar Seu Animal de estimaçao para algum lugar?" svg="Pets"/>
  <Cards tittle="PCD" disc="Pessoas com deficiencia" svg="PCD"/>
  <Cards tittle="LGBTQIA+" disc="LBGTQIA+" svg="LGBTQIA+"/>
  <Cards tittle="Tuor" disc="Tuor Poços de Caldas Conheça Nossa Linda cidade da melhor forma!" svg="Tuor"/>

     </div>


    <div className='md:PinkRose PinkRose 0 w-screen h-full md:w-screen md:h-screen md:flex flex flex-col md:flex-row '>
        <div className='PinkRose  md:w-3/5 md:h-screen'>

       <p className="md:text-5xl text-white md:ml-5 md:mt-10 mt-2 italic font-bold text-center text-2xl  w-screen  h-10 md:block">Quer Conheçer A Nossa Historia?</p>
          <div className='md:mt-12 mt-3 ml-5  w-96 md:w-5/6  md:ml-10'>
            <ImgEqp url="file:///C:/Users/kaio%20vinicios/Desktop/Imagem%20do%20WhatsApp%20de%202023-12-22%20%C3%A0(s)%2014.34.10_d2be136f.jpg" />
          </div>   
        </div>
           <div className="mt-2  ml-1 text-sm md:block md:w-2/6 h-screen  md:h-screen md:mt-9 md:ml-8 text-white md:text-lg  "><p className="md:mt-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Duis iaculis elit ac neque maximus elementum et vel urna.  Duis pellentesque eleifend libero sed ultricies. Nullam vel diam quam. Vivamus risus ex, pulvinar convallis eros at, aliquet accumsan libero.  Nam vehicula eu turpis eget laoreet. Quisque lobortis mauris posuere, consequat augue facilisis, eleifend sem. Maecenas id luctus nisl.  id ligula faucibus, a blandit ligula sollicitudin. Donec vestibulum felis magna, nec interdum odio ullamcorper non. Proin auctor, quam vel feugiat malesuada, turpis quam iaculis mauris, sed scelerisque ex massa sit amet libero. Donec volutpat a ipsum eu rhoncus. Praesent nisl orci, suscipit aliquet magna eget, ultricies fringilla erat.</p></div>
          
          
        </div>
      
           <div className='md:w-full h-28 w-sc border border-black bg-black flex '>


       <div className=' flex-col md:ml-1 md:w-10'>
        <LogoLinks svg="Whatsapp" />
        <LogoLinks svg="Instagram"/>
        <LogoLinks svg="linkedin"/>
        </div>

    <div className=' flex flex-col  md:w-32 '>
        <a className='text-white  mt-2 hover:text-pink-600  '>WhatsApp</a>
         <a className='text-white mt-2 hover:text-pink-600' href='https://www.instagram.com/chamaelasmotoristas?igsh=MW1nYmk1d2hjaWZ1Ng==' target='_blank' >Instagram</a>
          <a className='text-white mt-2 hover:text-pink-600 '>linkedin</a>
    </div>
          
           <div className='md:w-2/3'></div>
           <div className='md:w-80 -mt-3 ml-56 '>
            <LogoCE/>
           </div>
       </div>
      
       
    






        </div>


    
   
    

    </>
  );
}

export default App;
