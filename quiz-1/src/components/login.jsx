import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <GoogleOAuthProvider clientId="491903598371-p11v3n1lre84ajbsbae0rjj4k0s1r48m.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            alert('Login successful:', credentialResponse);
          }}
          onError={() => {
           alert('Login failed');
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};
export default Login;