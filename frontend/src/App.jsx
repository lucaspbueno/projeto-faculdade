import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
import EarthIcon from './assets/earth.svg';
import ProfileIcon from './assets/profile.svg';

function App() {

  const links = [

    {id: 1, page: 'Ações Sustentáveis', url: '/acoes-sustentaveis'},
    {id: 2, page: 'Prêmios', url: '/premios'},
    {id: 3, page: 'Ranking', url: '/ranking'},
    {id: 4, page: 'Meus Cupons', url: '/meus-cupons'},

  ];

  return (
    <>
      <header className="flex justify-around items-center">
        <Button asChild className="hover:cursor-pointer">
          <img src={ EarthIcon } alt="Icone de um planeta" />
        </Button>

        <ul className="flex flex-row gap-8 list-none font-medium">
          {
            links && (
              links.map(({ id, page, url }) => (
                <li key={id}>
                  <Link to={url}>{page}</Link>
                </li>
              ))
            )
          }
        </ul>

        <Button asChild className="hover:cursor-pointer">
          <img src={ ProfileIcon } alt="Icone de perfil" />
        </Button>
      </header>
    </>
  )
}

export default App;