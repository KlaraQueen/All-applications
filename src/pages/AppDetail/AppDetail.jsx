import { useParams, Navigate, Link, useNavigate } from "react-router-dom";
import { apps } from "../../data/apps";
import * as S from "./AppDetail.styled";

export function AppDetail() {
  const { appId } = useParams();
  const navigate = useNavigate();
  const app = apps.find((a) => a.id === appId);

  if (!app) {
    return <Navigate to="/" replace />;
  }

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <S.Wrapper>
      <S.BackButton onClick={handleBack}>← Powrót do listy</S.BackButton>

      <S.Content>
        <S.Header>
          <S.Logo src={app.icon} alt={app.name} />
          <S.HeaderText>
            <S.Name>{app.name}</S.Name>
            <S.Tagline>{app.tagline}</S.Tagline>
            <S.GooglePlayLink href={app.googlePlayUrl} target="_blank" rel="noopener noreferrer">
              Pobierz z Google Play
            </S.GooglePlayLink>
          </S.HeaderText>
        </S.Header>

        <S.Description>{app.description}</S.Description>

        <S.ScreenshotsSection>
          <S.ScreenshotsTitle>Zrzuty ekranu</S.ScreenshotsTitle>
          <S.ScreenshotsGrid>
            {app.screenshots.map((src, i) => (
              <S.Screenshot key={i} src={src} alt={`Zrzut ekranu ${i + 1}`} />
            ))}
          </S.ScreenshotsGrid>
        </S.ScreenshotsSection>

        <S.Footer>
          <S.FooterLink to={app.regulationsUrl}>
            Regulamin
          </S.FooterLink>
          <S.FooterLink to={app.privacyPolicyUrl}>
            Polityka prywatności
          </S.FooterLink>
        </S.Footer>
      </S.Content>
    </S.Wrapper>
  );
}
