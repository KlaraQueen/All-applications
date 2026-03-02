import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.main`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.surface};
`;

export const BackButton = styled.button`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const Content = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Logo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: ${({ theme }) => theme.radius.lg};
  object-fit: cover;
  object-position: top center;
  flex-shrink: 0;
`;

export const HeaderText = styled.div`
  flex: 1;
  min-width: 0;
`;

export const Name = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
`;

export const Tagline = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0 0 ${({ theme }) => theme.spacing.lg};
  line-height: 1.5;
`;

export const GooglePlayLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.accentHover};
  }
`;

export const Description = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  white-space: pre-line;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

export const ScreenshotsSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

export const ScreenshotsTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 ${({ theme }) => theme.spacing.xl};
`;

export const ScreenshotsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Screenshot = styled.img`
  width: 100%;
  max-width: 280px;
  height: auto;
  aspect-ratio: 9 / 16;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const Footer = styled.footer`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const FooterLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.accentHover};
    text-decoration: underline;
  }
`;
