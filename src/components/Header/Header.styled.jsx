import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: absolute;
  width: 279px;
  height: 19px;
`;

export const PageHeader = styled.header`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  margin-top: 0;

  background-color: #f7edd4;
`;

export const PageHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1280px;
`;

export const Logo = styled.a`
  width: 24px;
  margin-top: 0;
  margin-right: 600px;
  margin-left: 0;
`;

export const SiteNav = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

export const SiteNavItem = styled.li`
  height: 20px;
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 20px;

  margin-right: 60px;

  &:last-child {
    margin-right: 0;
  }
`;

export const SiteNavLink = styled.a`
  text-decoration: none;
  color: #093426;
`;

export const SiteContacts = styled.ul`
  display: block;
  align-items: center;
  list-style: none;
  margin-top: 20px;
  margin-left: 300px;

  background-color: #f7edd4;
`;

export const SiteContactsItem = styled.li`
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;

  width: 279px;
  height: 19px;
  margin-bottom: 10px;
`;

export const SiteContactsLink = styled.a`
  color: #448d76;
`;

export const MobileWrapper = styled.div`
  // Стилі для mobile-wrapper
`;

export const MobileMenuButton = styled.button`
  // Стилі для mobile-menu__button
`;

export const MobMenuContainer = styled.div`
  // Стилі для mob-menu-container
`;

export const MobMenuNavigation = styled.div`
  // Стилі для mob-menu-navigation
`;

export const MobMenuButtonClose = styled.button`
  // Стилі для mobile-menu__cross
`;

export const HeaderMobMenu = styled.ul`
  // Стилі для header-mob-menu
`;

export const HeaderMobMenuItem = styled.li`
  // Стилі для header-mob-menu__item
`;

export const HeaderMobMenuLink = styled.a`
  // Стилі для header-mob-menu__link
`;

export const HeaderMobileContacts = styled.div`
  // Стилі для header-mobile-contacts
`;

export const HeaderMobileContactsList = styled.ul`
  // Стилі для header-mobile-contacts__list
`;

export const HeaderMobileContactsItem = styled.li`
  // Стилі для header-mobile-contacts__item
`;

export const HeaderMobileContactsLink = styled.a`
  // Стилі для header-mobile-contacts__link
`;

export const MobSocialsSet = styled.ul`
  // Стилі для mob-socials-set
`;

export const MobSocialsSetItem = styled.li`
  // Стилі для mob-socials-set__item
`;

export const MobSocialsSetLink = styled.a`
  // Стилі для mob-socials-set__link
`;
