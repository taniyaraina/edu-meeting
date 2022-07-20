import styled from 'styled-components';
import Header from './global/Header';
// import Footer from './global/Footer';

const Container = styled.div`
  min-height: 70vh;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Header />

      <Container>{children}</Container>
      {/* <Footer data={data} item={item} /> */}
    </div>
  );
};

export default Layout;
