import NavBarMenu from '../components/NavBarMenu';
import Footer from '../components/Footer';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
 
function RootLayout({ children }) {
  const menuItems = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'Laboratorium 1', link: '/lab1' },
    { id: 3, label: 'Laboratorium 2', link: '/lab2' },
    { id: 4, label: 'Laboratorium 3' , link: '/lab3'},
    { id: 5, label: 'Laboratorium 4' , link: '/lab4'}
  ];
 
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <NavBarMenu items={menuItems} />
 
        <Container className="flex-grow-1 mt-4">{children}</Container>
 
        <Footer />
      </div>
    </>
  );
}
 
RootLayout.propTypes = {
  children: PropTypes.node,
};
 
export default RootLayout;
 
 