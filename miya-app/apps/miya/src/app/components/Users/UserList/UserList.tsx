import classnames from 'classnames';
import { FC, useEffect, useState } from 'react';
import {
  useUsersActionsContext,
  useUsersContext,
} from '../../../context/UsersContext';
import { User } from '../../../models/models';
import { BasicButton } from '../../common';
import styles from './UserList.module.scss';

const UserList: FC = () => {
  const { users } = useUsersContext();
  const { getUsers } = useUsersActionsContext();

  const [showActiveUser, setShowActiveUser] = useState<boolean>(false);

  const handleShowActiveUser = () => {
    setShowActiveUser(!showActiveUser);
  };

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div
      className={classnames(
        styles.hideActiveUser,
        showActiveUser && styles.showActiveUser
      )}
    >
      {!showActiveUser && (
        <BasicButton
          buttonText="Pokaż aktywnych użytkowników"
          buttonIcon="user"
          onClick={handleShowActiveUser}
          customClassName={styles.buttonShowUser}
        />
      )}
      <div className={styles.userList}>
        {showActiveUser && (
          <i
            className={classnames('icon-cancel', styles.closeIcon)}
            onClick={handleShowActiveUser}
          />
        )}

        {showActiveUser &&
          users?.map((user: User, key: number) => (
            <div key={key} className={styles.activeUser}>
              {user.isActive && (
                <p>
                  {user.username}
                  <i className={classnames('icon-circle', styles.activeIcon)} />
                </p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserList;
