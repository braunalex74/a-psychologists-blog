import React from 'react';

import LogoImage from './path/to/logo.png';
import { FiMail, FiSmartphone } from 'react-icons/fi';
import {
  Wrapper,
  PageHeader,
  Container,
  PageHeaderContainer,
  Nav,
  Logo,
  SiteNav,
  SiteNavItem,
  SiteNavLink,
  SiteContacts,
  SiteContactsItem,
  SiteContactsLink,
} from './Header.styled';

const Header = () => {
  return (
    <Wrapper>
      <PageHeader>
        <Container>
          <PageHeaderContainer>
            <Nav>
              <Logo href="./index.html" lang="en">
                <img src={LogoImage} alt="LogoImage" />
              </Logo>
              <SiteNav>
                <SiteNavItem>
                  <SiteNavLink
                    href="./index.html"
                    class="site-nav__link site-nav__link--current point link"
                    aria-current="page"
                  >
                    Головна
                  </SiteNavLink>
                </SiteNavItem>
                <SiteNavItem>
                  <SiteNavLink
                    class="site-nav__link point link"
                    href="./portfolio.html"
                  >
                    Блог
                  </SiteNavLink>
                </SiteNavItem>
                <SiteNavItem>
                  <SiteNavLink class="site-nav__link point link" href="">
                    Контакти
                  </SiteNavLink>
                </SiteNavItem>
                <SiteNavItem>
                  <SiteNavLink
                    href="./index.html"
                    class="site-nav__link site-nav__link--current point link"
                    aria-current="page"
                  >
                    Про мене
                  </SiteNavLink>
                </SiteNavItem>
              </SiteNav>
            </Nav>
            <SiteContacts>
              <SiteContactsItem>
                <SiteContactsLink
                  class="site-contacts__link site-contacts__link--contact point link"
                  href="yuliia.braun.co@gmail.com"
                  lang="en"
                >
                  <FiMail class="site-contacts__icon" />
                  yuliia.braun.co@gmail.com
                </SiteContactsLink>
              </SiteContactsItem>
              <SiteContactsItem>
                <SiteContactsLink
                  class="site-contacts__link site-contacts__link--contact point link"
                  href="https://www.instagram.com/psy_y.braun/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiSmartphone class="site-contacts__icon" />
                  @psy_y.braun
                </SiteContactsLink>
              </SiteContactsItem>
            </SiteContacts>
          </PageHeaderContainer>

          <div class="container mobile-wrapper">
            <a class="site-logo link" href="./index.html" lang="en">
              <span class="site-logo__accent">Web</span>Studio
            </a>
            <button
              type="button"
              class="mobile-menu__button mobile-menu__toggle js-open-menu"
              aria-expanded="false"
              aria-controls="mobile-menu"
            >
              <svg
                class="mobile-menu__icon"
                width="40"
                height="40"
                aria-label="Перемикач мобільного меню"
              >
                <use
                  class="mobile-menu__icon-burger"
                  href="./images/icons.svg#icon-burger"
                ></use>
                <use
                  class="mobile-menu__icon-cross"
                  href="./images/icons.svg#icon-mobile-close"
                ></use>
              </svg>
            </button>

            <div class="mob-menu-container js-menu-container" id="mobile-menu">
              <div class="mob-menu-navigation">{/* Решта коду меню */}</div>
            </div>
          </div>
        </Container>
      </PageHeader>
    </Wrapper>
  );
};

export default Header;
