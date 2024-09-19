import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'ul',
      name: 'Max Schwarz',
      image: 'https://www.hitachi-solutions-create.co.jp/column/img/image-generation-ai.jpg',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
