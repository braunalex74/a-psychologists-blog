import styled from '@emotion/styled';

export const Wrapper = styled.div`
  /* position: absolute; */
  height: 19px;
  margin-left: 0;
`;

export const PageHeader = styled.header`
  display: flex;
  align-items: center;
  margin-left: 0;
  height: 121px;
`;

export const Container = styled.div`
  margin-top: 0;

  margin-bottom: 40px;
  margin-left: 0;
`;

export const PageHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 0;
  background-color: #f7edd4;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0;
`;

export const Logo = styled.a`
  margin-top: 0;
  margin-left: auto;
`;

export const SiteNav = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-top: 50px;
  width: 100vh;
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
  margin-left: 0px;

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
