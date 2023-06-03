import React from 'react';

import LogoImage from '../assets/image/LogoImage.png';
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
                <img src={LogoImage} width="445" height="76" alt="LogoImage" />
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
        </Container>
      </PageHeader>
    </Wrapper>
  );
};

export default Header;
