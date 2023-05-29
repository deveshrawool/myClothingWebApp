import {
  signInWithGooglePopup,
  createUserProfileDocument,
  createUserDocumentFromUserAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    //createUserProfileDocument(response);
    const userDocRef = await createUserDocumentFromUserAuth(response?.user)
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
