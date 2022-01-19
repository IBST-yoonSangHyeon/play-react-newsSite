import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = () => {

    /* 메뉴 드롭다운 컨트롤 시작 */
    let menuOriginal = [
        { 
            'level1MenuName' : 'Start',
            'level1MenuNames' : [
                'Enter',
                'Modal',
                'artist'
            ]
        },
        { 
            'level1MenuName' : 'beauty',
            'level1MenuNames' : [
                'cosmetics',
                'hair',
                'nail'
            ]
        },
        { 
            'level1MenuName' : 'interview',
            'level1MenuNames' : [
                'interview',
                'column',
            ]
        },
        { 
            'level1MenuName' : 'education',
            'level1MenuNames' : [
                'dance',
                'walking',
                'pose'
            ]
        },
        { 
            'level1MenuName' : 'health',
            'level1MenuNames' : [
                'hospital introduction',
                'health information',
            ]
        },
        { 
            'level1MenuName' : 'Award',
            'level1MenuNames' : [
                'LBMA Kids model',
                'LBMA Fashion Week',
                'LBMA Senior model'
            ]
        },
        { 
            'level1MenuName' : 'Fashion',
            'level1MenuNames' : [
                'clothes',
                'underwear',
                'accessory'
            ]
        },
        { 
            'level1MenuName' : 'partner',
            'level1MenuNames' : [
                'nation',
                'international',
                'association'
            ]
        },
        { 
            'level1MenuName' : 'Travel',
            'level1MenuNames' : [
                'nation',
                'international',
                'information'
            ]
        },
        { 
            'level1MenuName' : 'society',
            'level1MenuNames' : [
                'society',
                'politics',
                'culture'
            ]
        }
    ];

    let menuFilter = menuOriginal.map((menu, idx) => {
        menu['dropdownOpen'] = false;
        return menu;
    })
    console.log(menuFilter);
    
    let [dropdownOpen, setDropdownOpen] = useState(true);
    let toggle = () => {
        setDropdownOpen(!dropdownOpen);
    }
    /* 메뉴 드롭다운 컨트롤 끝 */
    
    return (
        <div>
            <Nav 
            pills
            fill>
                <Dropdown
                nav
                isOpen={dropdownOpen}
                onMouseOver={ () => { toggle() } }
                onMouseLeave={ () => { toggle() } }
                >
                <DropdownToggle
                    caret
                    nav
                >
                    Start
                </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                        Enterainer
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Modal
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <Dropdown
                nav
                isOpen={dropdownOpen}
                onMouseOver={ () => { toggle() } }
                onMouseLeave={ () => { toggle() } }
                >
                    <DropdownToggle
                        caret
                        nav
                    >
                        Beauty
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                         Hair
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Nail
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Nav>            
        </div>
    );
};

export default NavBar;