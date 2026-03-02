import { useNavigate } from "react-router-dom";
import * as S from "./PolitykaPrywatnosci.styled";

export function PolitykaPrywatnosci() {
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
        <S.Title>Polityka prywatności aplikacji QuizY</S.Title>

        <S.Section>
          <S.SectionTitle>1. Informacje ogólne</S.SectionTitle>
          <S.Paragraph>1.1. Niniejsza polityka opisuje zasady przetwarzania danych w związku z korzystaniem z aplikacji QuizY, dostarczanej przez KlaraQueen.</S.Paragraph>
          <S.Paragraph>1.2. Korzystając z Aplikacji, użytkownik potwierdza zapoznanie się z niniejszą polityką i akceptuje jej postanowienia.</S.Paragraph>
        </S.Section>

        <S.Section>
          <S.SectionTitle>2. Przetwarzanie danych</S.SectionTitle>
          <S.Paragraph>2.1. Brak zbierania danych osobowych: Aplikacja nie zbiera, nie przechowuje ani nie przesyła żadnych danych osobowych użytkownika (takich jak imię, nazwisko czy numer telefonu) na zewnętrzne serwery Administratora.</S.Paragraph>
          <S.Paragraph>2.2. Dane lokalne: Informacje o wynikach quizów i postępach są zapisywane wyłącznie lokalnie w pamięci urządzenia. Usunięcie aplikacji trwale usuwa te dane.</S.Paragraph>
        </S.Section>

        <S.Section>
          <S.SectionTitle>3. Usługi podmiotów trzecich (Reklamy)</S.SectionTitle>
          <S.Paragraph>3.1. Aplikacja korzysta z usług reklamowych (np. Google AdMob). Dostawcy ci mogą zbierać dane techniczne (identyfikatory reklamowe, adres IP) w celu personalizacji treści.</S.Paragraph>
          <S.Paragraph>3.2. Użytkownik może zarządzać ustawieniami prywatności reklam w ustawieniach swojego urządzenia.</S.Paragraph>
        </S.Section>

        <S.Section>
          <S.SectionTitle>4. Kontakt</S.SectionTitle>
          <S.Paragraph>4.1. Administratorem danych w zakresie działania aplikacji jest KlaraQueen.</S.Paragraph>
          <S.Paragraph>4.2. Kontakt w sprawach prywatności: kontakt.klaraqueen@gmail.com.</S.Paragraph>
        </S.Section>

        <S.Section>
          <S.SectionTitle>5. Zmiany polityki</S.SectionTitle>
          <S.Paragraph>5.1. Administrator zastrzega sobie prawo do aktualizacji polityki. Zmiany wchodzą w życie z chwilą ich publikacji.</S.Paragraph>
        </S.Section>
      </S.Content>
    </S.Wrapper>
  );
}
