import { AppCard } from "./AppCard/AppCard";
import * as S from "./AppList.styled";

export function AppList({ apps, onAppClick }) {
  return (
    <S.Wrapper>
      <S.Title>Dostępne aplikacje</S.Title>
      <S.Grid>
        {apps.map((app) => (
          <AppCard key={app.id} app={app} onClick={onAppClick} />
        ))}
      </S.Grid>
    </S.Wrapper>
  );
}
