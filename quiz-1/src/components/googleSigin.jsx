 import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';

const googleSigIn = () => {
     const  handleSuccess=(credentialResponse)=>{
           console.log("successful",credentialResponse)
     }
     const handleError=()=>{
        console.log('error')
     }
    return (
    <div>
        
        <GoogleOAuthProvider clientId='491903598371-p11v3n1lre84ajbsbae0rjj4k0s1r48m.apps.googleusercontent.com'>
            <GoogleLogin
             onSuccess={handleSuccess}
             onError={handleError}       
                />
        </GoogleOAuthProvider>
    </div>
  )
}

export default googleSigIn