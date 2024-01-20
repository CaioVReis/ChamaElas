import { Parser }  from 'html-to-react'; //tranformar HTML em Reactjs para ler
import { Navbar } from "./components/NavBar";
import "./App.css";
import { GifMovie } from "./components/video";
import { TextP } from "./components/TextP";
import { Stores } from "./components/Store";
import { Cards } from "./components/Cards";
import ImgEqp from "./ImgEquipe";
import { LogoLinks } from "./Logos";
import { LogoCE } from "./components/ChamaELasLg";
import NavBarFlow from "./components/NavBarFlow";
import { useEffect, useState } from "react";
import { Products , Content} from "./store";

function App() {
  const htmlToReactParser = new Parser() //Transformando HTML em React
  const [products,setProducts] = useState([])
  const [data , setData] = useState({ //criaçao de objetos.
    banner: "",
    video_url: "",
    historia_desktop: "",
    historia_mobile:"",
  })

  useEffect(()=>{
     featchData()         //ambos efeitos criados para transcrever "String in arrays" .
     featchDataContent()  //ambos efeitos criados para transcrever "String in arrays" .
  },[])


  const featchData = async () =>{//funçao syncrona com Products
    const res = await Products()
    const data =  JSON.parse(res.data.Data)
    setProducts(data)
  }

  const featchDataContent = async () =>{//funçao syncrona com content
    const res = await Content()
    const content = JSON.parse(res.data.Data)

    const banner_text = content.find(c => c.name === "banner_text")
    const video_url = content.find( c => c.name === "video_url")
    const historia_desktop = content.find(c => c.name === "historia_desktop")
    const historia_mobile = content.find(c => c.name === "historia_mobile")

  

    setData({ //utilizaçao para pegar valor da API /ID/NAME/VALUE
     
      banner: banner_text.value,
      video_url: video_url.value,
      historia_desktop: historia_desktop.value,
      historia_mobile:historia_mobile.value,
    })

  
  }

 

  return (
    <>
      <div className="PinkRose">
        <div className="md:container">
          <Navbar />
          <NavBarFlow />
        </div>
        <div className="container flex md:flex-row md:pt-40 md:pb-8 flex-col-reverse pt-20">
          <div className="md:flex md:flex-col md:justify-between">
            <section>
              <TextP text={data.banner}/>
            </section>
            <section>
              <Stores />
            </section>
          </div>

          <div className="md:w-[85%] md:px-0 px-4">
          <GifMovie url={data.video_url}/> 
          </div>

        </div>
      </div>

      <div className="container mt-8 mb-10">
        <div className="">
          <h2 className="text-center mb-2 tex font-bold md:text-3xl text-2xl uppercase italic">Atendimento Exclusivo!</h2>
          <p className="text-center italic text-xl font-semibold mb-6">
            Conheça Todos
            <br />
            Nossos Atendimentos.!
          </p>
        </div>
        <div className="md:grid md:grid-cols-3 gap-4 text-center flex flex-col">
          {
            products.map(p =>  //mapeando dados API
                  <Cards
                  tittle={p.name}
                  disc={p.description}
                  svg={p.icon}
                />
              )
          }
       
        </div>
      </div>
      <div className="PinkRose">
        <div className="container">
          <div className="md:PinkRose md:flex flex flex-col md:flex-row mb-7">
            <div className="PinkRose  md:w-3/5 ">
              <p className="md:text-5xl text-white   container mt-5  italic font-bold text-center text-2xl  h-10 md:mt-10">
                Quer Conheçer A Nossa Historia?
              </p>
              <div className="md:mt-12 mt-3 pl-3 pr-3   md:w-4/5  ">
                <ImgEqp url="file:///C:/Users/kaio%20vinicios/Desktop/Imagem%20do%20WhatsApp%20de%202023-12-22%20%C3%A0(s)%2014.34.10_d2be136f.jpg" />
              </div>
              <div className="text-white text-center md:hidden ">
              { htmlToReactParser.parse(data.historia_mobile)}
                 
              </div>
            </div>
            <div className="mt-2 Container Scrollbar text-sm  md:h-[345px]   pr-5 md:mt-32 md:w-2/5 m-1 md:-ml-28  text-white md:text-sm hidden md:block ">
           { htmlToReactParser.parse(data.historia_desktop)}
            </div>
          </div>
         
        </div>
        <div className="bg-black h-[110px]">
          <div className="flex ">
            <div className=" flex-col md:absolute md:-left-3 md:ml-1 md:w-10">
              <LogoLinks svg="Whatsapp" />
              <LogoLinks svg="Instagram" />
              <LogoLinks svg="linkedin" />
            </div>

            <div className=" flex flex-col md:absolute md:left-8 md:w-32 ">
              <a className="text-white  mt-2 hover:text-pink-600  ">WhatsApp</a>
              <a
                className="text-white mt-2 hover:text-pink-600"
                href="https://www.instagram.com/chamaelasmotoristas?igsh=MW1nYmk1d2hjaWZ1Ng=="
                target="_blank"
              >
                Instagram
              </a>
              <a className="text-white mt-2 hover:text-pink-600 ">linkedin</a>
            </div>

            <div className="md:w-2/3"></div>
            <div className="md:w-80  -mt-3 ml-56 ">
              <LogoCE />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
