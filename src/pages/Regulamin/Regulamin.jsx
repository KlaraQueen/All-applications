import { useNavigate } from "react-router-dom";
import * as S from "./Regulamin.styled";

export function Regulamin() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <S.Wrapper>
      <S.BackButton onClick={handleBack}>← Powrót</S.BackButton>
      <S.Content>
        <S.Title>Regulamin aplikacji QuizY</S.Title>

        <S.Section>
          <S.SectionTitle>1. Postanowienia ogólne</S.SectionTitle>
          <S.Subsection>1.1. Niniejszy regulamin określa zasady korzystania z aplikacji QuizY (zwanej dalej „Aplikacją"), której administratorem jest KlaraQueen.</S.Subsection>
          <S.Paragraph>1.2. Aplikacja ma charakter wyłącznie edukacyjny i rozrywkowy. Treści w niej zawarte nie stanowią porady specjalistycznej.</S.Paragraph>
          <S.Paragraph>1.3. Instalacja, uruchomienie lub korzystanie z Aplikacji jest równoznaczne z akceptacją niniejszego regulaminu w całości.</S.Paragraph>
        </S.Section>

        <S.Section>
          <S.SectionTitle>2. Finansowanie i Reklamy</S.SectionTitle>
          <S.Paragraph>2.1. Aplikacja jest udostępniana bezpłatnie.</S.Paragraph>
          <S.Paragraph>2.2. W celu pokrycia kosztów rozwoju, w Aplikacji wyświetlane są treści reklamowe pochodzące od zewnętrznych dostawców (np. Google AdMob).</S.Paragraph>
          <S.Paragraph>2.3. Korzystając z Aplikacji, użytkownik akceptuje wyświetlanie reklam.</S.Paragraph>
        </S.Section>

        <S.Section>
          <S.SectionTitle>3. Odpowiedzialność</S.SectionTitle>
          <S.Paragraph>3.1. Aplikacja jest udostępniana w formie „tak jak jest" (as is). Administrator nie gwarantuje nieprzerwanego działania ani braku błędów merytorycznych w pytaniach.</S.Paragraph>
          <S.Paragraph>3.2. Administrator nie ponosi odpowiedzialności za decyzje podjęte na podstawie informacji zawartych w Aplikacji ani za ewentualne szkody wynikłe z jej użytkowania.</S.Paragraph>
        </S.Section>

        <S.Section>
          <S.SectionTitle>4. Kontakt i Reklamacje</S.SectionTitle>
          <S.Paragraph>4.1. Wszelkie pytania, skargi, reklamacje lub roszczenia należy kierować wyłącznie na adres e-mail: kontakt.klaraqueen@gmail.com.</S.Paragraph>
          <S.Paragraph>4.2. Administrator zobowiązuje się do rozpatrzenia zgłoszeń w terminie do 30 dni roboczych od ich otrzymania.</S.Paragraph>
        </S.Section>
      </S.Content>
    </S.Wrapper>
  );
}
