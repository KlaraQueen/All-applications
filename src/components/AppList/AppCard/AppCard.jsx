import * as S from "./AppCard.styled";

export function AppCard({ app, onClick }) {
  return (
    <S.Card onClick={() => onClick(app)}>
      <S.Icon src={app.icon} alt={app.name} />
      <S.Content>
        <S.Name>{app.name}</S.Name>
        <S.Tagline>{app.tagline}</S.Tagline>
      </S.Content>
      <S.Arrow>→</S.Arrow>
    </S.Card>
  );
}
