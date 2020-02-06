import * as React from 'react';
import {useHistory} from 'react-router-dom';
import {LoginComponent} from './login.component';
import {linkRoutes, SessionContext} from 'core';
import {createEmptyLogin, LoginEntityVm} from './login.vm';
import {validateCredentials} from './login.api';

export const LoginContainer = () => {
  const history = useHistory();
  const [initialLogin] = React.useState<LoginEntityVm>(createEmptyLogin());
  const { updateLogin } = React.useContext(SessionContext);
  const [snackBarIsOpen, setSnackBarVisibility] = React.useState<boolean>(false);

  const navigateToHotel = (loginInfo: LoginEntityVm) => {
    updateLogin(loginInfo.login);
    history.push(linkRoutes.hotelCollection);
  };

  const handleLogin = (loginInfo: LoginEntityVm) => {
    validateCredentials(loginInfo.login, loginInfo.password).then(
      areValidCredentials => {
        areValidCredentials
          ? navigateToHotel(loginInfo)
          : setSnackBarVisibility(true);
      }
    );
  };

  const handleCloseSnackBar = () => {
    setSnackBarVisibility(false);
  };

  return <LoginComponent onLogin={handleLogin} initialLogin={initialLogin} snackBarIsOpen={snackBarIsOpen} handleCloseSnackBar={handleCloseSnackBar}/>;
};
