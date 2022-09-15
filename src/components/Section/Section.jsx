import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
font-size: 36px;
margin: 0;
margin-bottom: 10px;
`
const Section = ({title, children}) => {
    return (
        <>
        <Title>{title}</Title>
        {children}
        </>
    )
}
export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}
