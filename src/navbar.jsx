import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = () => {

    /* 메뉴 드롭다운 컨트롤 시작 */
    let menuData = [
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
    let [menu, setMenu] = useState(menuData);
    let activeMenuIdx = useState(null);

    let useMenuEffect = useEffect(()=> {
        let copyMenu = [...menuData];
        let menu = copyMenu.map((menuItem, idx) => {
            menuItem['dropdownOpen'] = false;
            return menuItem;
        })
        setMenu(menu);
    }, []);

    let menuMouseOver = (prIdx) => {
        console.log('prIdx', prIdx);
        let copyMenu = [...menu];
        let menu1 = copyMenu.map((menuItem, idx) => {
            if(idx === prIdx){
                console.log('같다');
                menuItem['dropdownOpen'] = true;
            }else{
                menuItem['dropdownOpen'] = false;
            }
            
            return menuItem;
        })
        console.log(menu1);
        setMenu(menu1);
    }

    let menuMouseLeave = () => {
        let copyMenu = [...menu];
        let menu1 = copyMenu.map((menuItem, idx) => {
            menuItem['dropdownOpen'] = false;
            return menuItem;
        })
        setMenu(menu1);
    }
    
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
            { menu !== null
              ? menu.map((menuItem,idx) => {
                    return (
                            <Dropdown
                                nav
                                isOpen={menuItem['dropdownOpen']}
                                onMouseOver={ () => { menuMouseOver(idx) } }
                                onMouseLeave={ () => { menuMouseLeave() } }
                                key={ 'menu'+idx }
                            >
                            <DropdownToggle
                                nav
                            >
                            {menuItem['level1MenuName']}
                            </DropdownToggle>
                                { 
                                    menuItem['level1MenuNames'].length > 0 
                                    ? (
                                    <DropdownMenu className='wp-100'>
                                        { menuItem['level1MenuNames'].map((menuItemLevel2, idx2) => {
                                            console.log(menuItemLevel2);
                                            return (
                                                <DropdownItem>
                                                    { menuItemLevel2 }
                                                </DropdownItem>
                                            )
                                        })
                                        }

                                    </DropdownMenu>
                                    )
                                    : null
                                }
                                
                            </Dropdown>
                    )
                })
            : null
        }
            </Nav>            
        </div>
    );
};

export default NavBar;