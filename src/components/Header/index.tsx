//Библиотеки
import { FC, useContext } from 'react'
//Стили
import styles from './Header.module.scss'
//Хуки
import { useAppSelector } from '@/hooks/useAppSelector'
//Контекст
import { SidebarContext } from '@/context/SidebarContext/SidebarContext'
//Компоненты
import { NavLink } from 'react-router-dom'
import { MobileHamburger, Navbar, SearchInput } from '@/components'
import { Button } from '@/components/UI'
import { MobileMenuContext } from '@/context/MobileMenuContext/MobileMenuContext'

const Header: FC = () => {
    const { authData } = useAppSelector((state) => state.auth)
    const { showSidebar } = useContext(SidebarContext)
    const { showMobileMenu } = useContext(MobileMenuContext)
    const { cartItems } = useAppSelector((state) => state.cart)
    const { favourites } = useAppSelector((state) => state.favourite)

    return (
        <header id={'header'}>
            <div className={styles.wrapper}>
                <Navbar />
                <SearchInput />
                <div className={styles.buttons}>
                    <NavLink to={'/favourite'}>
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 22 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.7441 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.7441 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z"
                                fill="#FFFFFF"
                            />
                        </svg>
                        {favourites.length > 0 ? (
                            <div
                                className={
                                    'w-[10px] h-[10px] rounded-full bg-[#e58e27] absolute right-[-5px] top-[-2px]'
                                }
                            ></div>
                        ) : (
                            ''
                        )}
                    </NavLink>
                    <NavLink to={'/cart'}>
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z"
                                stroke="#FFFFFF"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z"
                                stroke="#FFFFFF"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091"
                                stroke="#FFFFFF"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        {cartItems.length > 0 ? (
                            <div
                                className={
                                    'w-[10px] h-[10px] rounded-full bg-[#e58e27] absolute right-[-5px] top-0'
                                }
                            ></div>
                        ) : (
                            ''
                        )}
                    </NavLink>
                    {authData.token ? (
                        <button>
                            <NavLink to={`/profile`} state={{ id: authData.user._id }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-name="Layer 1"
                                    viewBox="0 0 29 29"
                                    width="30"
                                    height="30"
                                >
                                    <path
                                        fill="#FFF"
                                        d="M14.5 2A12.514 12.514 0 0 0 2 14.5 12.521 12.521 0 0 0 14.5 27a12.5 12.5 0 0 0 0-25Zm7.603 19.713a8.48 8.48 0 0 0-15.199.008A10.367 10.367 0 0 1 4 14.5a10.5 10.5 0 0 1 21 0 10.368 10.368 0 0 1-2.897 7.213ZM14.5 7a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 14.5 7Z"
                                    />
                                </svg>
                            </NavLink>
                        </button>
                    ) : (
                        <Button type={'Header'} onClick={() => showSidebar(true)}>
                            Войти
                        </Button>
                    )}
                </div>
                <MobileHamburger onClick={() => showMobileMenu(true)} />
            </div>
        </header>
    )
}

export default Header
