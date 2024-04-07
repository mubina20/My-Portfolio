import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import { NavbarContainer, NavbarNavigationContianer } from '../../style';
import { NavLink, useLocation } from 'react-router-dom';

const growWidth = keyframes`
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    position: relative; 
    transition: color 0.3s ease;

    &:hover::after {
        content: '';
        position: absolute;
        height: 2px;
        width: 0; 
        background: red;
        border-radius: 20px;
        left: 0;
        bottom: -8px;
        animation: ${growWidth} 0.5s forwards;
    }

    &:hover {
        /* color: #000; */
    }

    &.selected {
        background-color: red;
        font-size: 18px;
    }
`;

export function Header() {
    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(0);

    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setSelectedTab(0);
                break;
            case "/about":
                setSelectedTab(1);
                break;
            case "/skills":
                setSelectedTab(2);
                break;
            case "/portfolio":
                setSelectedTab(3);
                break;
            case "/education":
                setSelectedTab(4);
                break;
            default:
                setSelectedTab(0);
                break;
        }
    }, [location]);

    return (
        <div>
            <NavbarContainer>
                <div>
                    Logo
                </div>
                <NavbarNavigationContianer>
                    <StyledNavLink exact to="/" className={selectedTab === 0 ? "selected" : ""}>Home</StyledNavLink>
                    <StyledNavLink to="/about" className={selectedTab === 1 ? "selected" : ""}>About</StyledNavLink>
                    <StyledNavLink to="/skills" className={selectedTab === 2 ? "selected" : ""}>Skills</StyledNavLink>
                    <StyledNavLink to="/portfolio" className={selectedTab === 3 ? "selected" : ""}>Portfolio</StyledNavLink>
                    <StyledNavLink to="/education" className={selectedTab === 4 ? "selected" : ""}>Education</StyledNavLink>
                </NavbarNavigationContianer>
            </NavbarContainer>
        </div>
    )
}
