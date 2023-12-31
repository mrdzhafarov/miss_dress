import React, { useEffect, useState } from 'react';

import CategoriesDropdowBtn from '../../components/categoriesDropdowButton/CategoriesDropdowBtn';

import Paginations from '../../components/pagination/Paginations';

import { UserApi } from '../../store/services/UserApi';

import AdminMenu from './components/UI/adminMenu/AdminMenu';

import classes from './adminPageMain.module.scss';

import ProfileAva from './components/UI/profileAva/ProfileAva';
import UsersBlock from './components/UI/usersBlock/UsersBlock';
import PopularProducts from './components/UI/adminPopularProducts/AdminPopularProducts';

import styles from './components/adminPageUsers/adminPageUsers.module.scss';
import AdminRegularUsers from './components/UI/adminRegularUsers/AdminRegularUsers';
import AdminContentContainer from './components/UI/adminContentContainer/AdminContentContainer';
import AdminHeader from './components/UI/adminHeader/AdminHeader';

const AdminPageMain = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [counte, setCounte] = useState(1);
  const limit = 7;

  const info = [
    {
      amount: '1050',
      item: 'проданных товаров'
    },
    {
      amount: '230',
      item: 'новых пользователей'
    },
    {
      amount: '1.5m',
      item: 'полученный доход'
    }
  ];

  const [name, setName] = useState('');

  const Data = {
    limit: limit,
    counte: counte,
    name: name
  };

  const { data = [] } = UserApi.useGetAllQuery(Data);
  const cards = data || [];

  const allPages = Math.ceil(data?.result?.count / 7);

  const handleSave = (e) => {
    e.preventDefault();
    if (name !== '') {
    }
  };

  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      <AdminContentContainer>
        <AdminHeader />
        <h2>Content</h2>
      </AdminContentContainer>
      <div className={classes.main_part}>
        <div className={classes.main_top}>
          <ProfileAva />
        </div>
        <div className={classes.main_bot}>
          <div className={classes.left}>
            <h3>За последние 30 дней,</h3>
            <div className={classes.blocks}>
              {info.map((item, index) => (
                <UsersBlock
                  key={index}
                  value={item.amount}
                  text={item.item}
                />
              ))}
            </div>
            <div className={classes.users}>
              <h3>Все пользователи</h3>
              <div className={classes.features}>
                <div className={classes.search_users}>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 26 26'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clipPath='url(#clip0_362_873)'>
                      <path
                        d='M25.6821 24.1508L19.2157 17.6843C20.9779 15.5292 21.8443 12.7791 21.6357 10.003C21.4271 7.22696 20.1595 4.63725 18.0951 2.76957C16.0306 0.901894 13.3273 -0.100859 10.5443 -0.0312743C7.76127 0.0383101 5.11145 1.17491 3.14293 3.14342C1.17442 5.11194 0.0378219 7.76176 -0.0317626 10.5448C-0.101347 13.3278 0.901406 16.0311 2.76908 18.0956C4.63676 20.16 7.22647 21.4276 10.0025 21.6362C12.7786 21.8448 15.5287 20.9784 17.6839 19.2162L24.1503 25.6826C24.3546 25.8799 24.6282 25.9891 24.9123 25.9867C25.1963 25.9842 25.4681 25.8703 25.6689 25.6694C25.8698 25.4685 25.9837 25.1968 25.9862 24.9128C25.9886 24.6287 25.8794 24.3551 25.6821 24.1508ZM10.8329 19.5C9.11875 19.5 7.44314 18.9917 6.01791 18.0394C4.59269 17.0871 3.48186 15.7336 2.8259 14.1499C2.16994 12.5663 1.99831 10.8237 2.33271 9.14256C2.66712 7.46139 3.49254 5.91714 4.70459 4.70508C5.91665 3.49303 7.4609 2.66761 9.14207 2.3332C10.8232 1.9988 12.5658 2.17043 14.1494 2.82639C15.7331 3.48234 17.0866 4.59317 18.0389 6.0184C18.9912 7.44363 19.4995 9.11924 19.4995 10.8333C19.4969 13.1311 18.583 15.334 16.9583 16.9588C15.3335 18.5835 13.1306 19.4974 10.8329 19.5Z'
                        fill='#372E24'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_362_873'>
                        <rect
                          width='26'
                          height='26'
                          fill='white'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <form
                    onSubmit={handleSave}
                    className={styles.container}
                  >
                    <input
                      className={styles.searchMain}
                      placeholder='Поиск пользователей'
                      type='text'
                    />
                    <button
                      style={{ display: 'none', visibility: 'hidden' }}
                      type={'submit'}
                    ></button>
                  </form>
                </div>
                <CategoriesDropdowBtn />
              </div>
            </div>
            <div className={classes.table}>
              <div className={classes.table_children}>
                <h4>Пользователь</h4>
                <h4>Продажи</h4>
                <h4>Доход</h4>
                <h4>Статус</h4>
              </div>
              {cards?.result?.data?.map((item) => (
                <div
                  key={item.id}
                  className={classes.table_info}
                >
                  <h4>
                    {item.firstName} {item.lastName}
                  </h4>
                  <h5>{item.id} продаж</h5>
                  <h5>{item.id}k+ доход</h5>
                  <div>
                    {item.status == '1' ? (
                      <h6
                        style={{
                          backgroundColor: '#C1F2D8',
                          paddingLeft: '3px'
                        }}
                      >
                        Проверен
                      </h6>
                    ) : item.status === '2' ? (
                      <h6 style={{ backgroundColor: '#F1F2C1' }}>В ожидании</h6>
                    ) : (
                      <h6 style={{ backgroundColor: '#ECCFB5' }}>
                        Не проверен
                      </h6>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Paginations
              onChange={(event, page) => setCounte(page)}
              count={allPages}
            />
          </div>
          <div className={classes.right}>
            <PopularProducts />
            <AdminRegularUsers />
            <div>
              <h3 className={classes.regularUsers}>Постоянные пользователи</h3>
              {classes.regularUsers &&
                classes.regularUsers.map((item) => (
                  <div className={classes.products}>
                    <h4>{item.name}</h4>
                    <h5>{item.sales} продаж</h5>
                    <h5>{item.income} доход</h5>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPageMain;
