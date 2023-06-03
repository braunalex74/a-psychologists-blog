import React from 'react';
import LogoImage from '../assets/image/LogoImage.png';
import { FiInstagram, FiMail } from 'react-icons/fi';
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
          <PageHeaderContainer style={{ marginLeft: '-350px' }}>
            <Nav>
              <Logo href="./index.html" lang="en">
                <img src={LogoImage} width="445" height="76" alt="LogoImage" />
              </Logo>
              <SiteNav>
                <SiteNavItem style={{ marginLeft: '150px' }}>
                  <SiteNavLink
                    href="./index.html"
                    className="site-nav__link site-nav__link--current point link"
                    aria-current="page"
                  >
                    Головна
                  </SiteNavLink>
                </SiteNavItem>
                <SiteNavItem>
                  <SiteNavLink
                    className="site-nav__link point link"
                    href="./portfolio.html"
                  >
                    Блог
                  </SiteNavLink>
                </SiteNavItem>
                <SiteNavItem>
                  <SiteNavLink className="site-nav__link point link" href="">
                    Контакти
                  </SiteNavLink>
                </SiteNavItem>
                <SiteNavItem>
                  <SiteNavLink
                    href="./index.html"
                    className="site-nav__link site-nav__link--current point link"
                    aria-current="page"
                  >
                    Про мене
                  </SiteNavLink>
                </SiteNavItem>
              </SiteNav>
            </Nav>
            <SiteContacts style={{ marginLeft: '160px' }}>
              <SiteContactsItem>
                <SiteContactsLink
                  className="site-contacts__link site-contacts__link--contact point link"
                  href="yuliia.braun.co@gmail.com"
                  lang="en"
                >
                  <FiMail
                    className="site-contacts__icon"
                    style={{ marginRight: '10px', color: 'CC0066' }}
                  />{' '}
                  yuliia.braun.co@gmail.com
                </SiteContactsLink>
              </SiteContactsItem>
              <SiteContactsItem>
                <SiteContactsLink
                  className="site-contacts__link site-contacts__link--contact point link"
                  href="https://www.instagram.com/psy_y.braun/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiInstagram
                    className="site-contacts__icon"
                    style={{ marginRight: '10px', color: 'CC0066' }}
                  />{' '}
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
