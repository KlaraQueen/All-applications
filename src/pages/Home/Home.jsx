import { useNavigate } from "react-router-dom";
import { Banner } from "../../components/Banner/Banner";
import { AppList } from "../../components/AppList/AppList";
import { apps } from "../../data/apps";
import * as S from "./Home.styled";

export function Home() {
  const navigate = useNavigate();

  const handleAppClick = (app) => {
    navigate(`/aplikacje/${app.id}`);
  };

  return (
    <S.Wrapper>
      <Banner />
      <AppList apps={apps} onAppClick={handleAppClick} />
    </S.Wrapper>
  );
}
