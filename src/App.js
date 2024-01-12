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

function App() {
  return (
    <>
      <div className="PinkRose w-screen   md:w-screen md:h-screen">
        <div>
          <Navbar />
          <NavBarFlow />
        </div>
        <div className="md:w-screen md:h-full flex flex-col">
          <div className="md:w-2/5  h-10 mt-40 ml-10">
            <TextP />
          </div>

          <div className=" md:w-1/2 h-10   md:ml-96 md:mt-12 ">
            <GifMovie />
          </div>
          <div className="md:w-52 h-36 md:-mt-12  md:mt-32  mt-10 ">
            <Stores />
          </div>
        </div>
      </div>

      <div className="md:w-screen     h-screen">
        <div className="md:mt-10  mt-16  ">
          <h2 className="text-center font-bold">Atendimento Exclusivo!</h2>
          <p className="text-center font-semibold">
            Conheça Todos
            <br />
            Nossos Atendimentos.!
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 p-7 flex-wrap  w-screen mt-5 ml-1  md:-mx-4 text-center">
          <Cards
            tittle="Kids"
            disc="Mais Conforto e Segurança para seus Filhos."
            svg="Kids"
          />
          <Cards
            tittle="Mercado"
            disc="Levamos sua compra no mercado o Mais rapido ate voce"
            svg="Mercado"
          />
          <Cards
            tittle="Pets"
            disc="Precisa Levar Seu Animal de estimaçao para algum lugar?"
            svg="Pets"
          />
          <Cards tittle="PCD" disc="Pessoas com deficiencia" svg="PCD" />
          <Cards tittle="LGBTQIA+" disc="LBGTQIA+" svg="LGBTQIA+" />
          <Cards
            tittle="Tuor"
            disc="Tuor Poços de Caldas Conheça Nossa Linda cidade da melhor forma!"
            svg="Tuor"
          />
        </div>

        <div className="md:PinkRose PinkRose  w-screen h-full md:w-screen  md:flex flex flex-col md:flex-row ">
          <div className="PinkRose  md:w-3/5 md:h-screen">
            <p className="md:text-5xl text-white md: md:mt-10 mt-2 italic font-bold text-center text-2xl  w-screen  h-10 md:block">
              Quer Conheçer A Nossa Historia?
            </p>
            <div className="md:mt-12 mt-3 ml-5  w-96 md:w-4/5  ">
              <ImgEqp url="file:///C:/Users/kaio%20vinicios/Desktop/Imagem%20do%20WhatsApp%20de%202023-12-22%20%C3%A0(s)%2014.34.10_d2be136f.jpg" />
            </div>
            <div className="text-white text-center md:hidden ">
              Na trajetória rumo à igualdade de gênero e segurança nas viagens,
              nasceu o aplicativo revolucionário: Chama Elas. Este aplicativo
              inovador surgiu como resultado da força e determinação das
              motoristas mulheres que decidiram unir suas vozes e habilidades
              para criar uma experiência de transporte única e voltada para a
              segurança de todas as passageiras, incluindo aquelas do grupo
              LGBTQIA+.
              <p className="mt-3">
                Na trajetória rumo à igualdade de gênero e segurança nas
                viagens, nasceu o aplicativo revolucionário: Chama Elas. Este
                aplicativo inovador surgiu como resultado da força e
                determinação das motoristas mulheres que decidiram unir suas
                vozes e habilidades para criar uma experiência de transporte
                única e voltada para a segurança de todas as passageiras,
                incluindo aquelas do grupo LGBTQIA+.
              </p>
            </div>
          </div>
          <div className="mt-2 Container Scrollbar text-sm  md:h-[388px]   pr-5 md:mt-32 md:w-2/5 m-1 md:-ml-28  text-white md:text-sm hidden md:block ">
            Na trajetória rumo à igualdade de gênero e segurança nas viagens,
            nasceu o aplicativo revolucionário: Chama Elas. Este aplicativo
            inovador surgiu como resultado da força e determinação das
            motoristas mulheres que decidiram unir suas vozes e habilidades para
            criar uma experiência de transporte única e voltada para a segurança
            de todas as passageiras, incluindo aquelas do grupo LGBTQIA+.
            <p className="md:mt-6">
              A história do Chama Elas começou quando um grupo inspirador de
              motoristas mulheres percebeu que havia uma necessidade latente de
              oferecer às mulheres e ao grupo LGBTQIA+ um ambiente de viagem
              mais seguro, onde todos pudessem se sentir protegidos e
              confiantes. Essas mulheres não apenas enfrentaram os desafios
              comuns da indústria de transporte, mas também superaram os
              estereótipos de gênero e lutaram contra a discriminação que muitas
              vezes atinge a comunidade LGBTQIA+.
            </p>
            <p className="md:mt-6">
              Com determinação implacável, as motoristas do Chama Elas se uniram
              para criar uma comunidade de motoristas fortes e empoderadas, que
              não apenas abraçavam a diversidade, mas a celebravam. Elas
              compartilharam histórias de sucesso e enfrentaram os obstáculos
              juntas, criando um vínculo que vai além das estradas. Seu objetivo
              é fornecer um serviço de transporte que seja inclusivo e respeite
              a individualidade de cada passageira.
            </p>
            <p className="md:mt-6">
              O aplicativo Chama Elas não se limitou a ser apenas um serviço de
              transporte; ele se tornou um recurso confiável para diversas
              necessidades. Além de atender às passageiras, o aplicativo
              expandiu sua oferta para incluir o transporte seguro de animais de
              estimação, mulheres idosas e crianças. Ele também se tornou a
              solução ideal para o transporte de compras em supermercados,
              permitindo que as mulheres realizem suas tarefas diárias com
              facilidade e conveniência.
            </p>
            <p className="mt-6">
              As motoristas do Chama Elas também se dedicam a oferecer passeios
              turísticos na cidade de Poços de Caldas, compartilhando seu
              conhecimento e amor pela cidade com as passageiras. E, com
              sensibilidade e cuidado, elas garantem que as pessoas com
              deficiência (PCD) recebam a assistência necessária durante suas
              viagens.
            </p>
            <p className="mt-6"></p>
            <p className="mt-6">
              O Chama Elas se transformou em um símbolo de empoderamento
              feminino, inclusão LGBTQIA+ e solidariedade para todos. Ele
              transcendeu o conceito tradicional de transporte e se tornou uma
              comunidade que representa a diversidade, segurança e igualdade. A
              história do Chama Elas é um lembrete poderoso de como a união de
              pessoas determinadas pode criar um espaço onde todas as
              identidades são respeitadas, celebradas e protegidas.
            </p>
            <p className="mt-6">Chama Elas 💞</p>
          </div>
        </div>
        <div className="PinkRose w-screen h-screen md:hidden -mt-1 text-white"></div>
        <div className="md:w-full h-28  border border-black bg-black flex ">
          <div className=" flex-col md:ml-1 md:w-10">
            <LogoLinks svg="Whatsapp" />
            <LogoLinks svg="Instagram" />
            <LogoLinks svg="linkedin" />
          </div>

          <div className=" flex flex-col  md:w-32 ">
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
          <div className="md:w-80 -mt-3 ml-56 ">
            <LogoCE />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
