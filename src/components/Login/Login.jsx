import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/authProvider";

const Login = () => {

    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLoggedIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);


        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            })
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold">Login now!</h1>
            </div>
            <div className="flex justify-center">
                <div className="card flex-shrink-0 w-full lg:w-2/5 shadow-2xl bg-base-200">
                    <div className="card-body">
                        <form onSubmit={handleLoggedIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="flex justify-center mt-8">
                                Do not have an account? <Link className="ml-2 text-blue-600 underline" to='/register'>Register Here</Link>
                            </div>
                            <div className="flex justify-center mt-4">
                                <button onClick={handleGoogleSignIn} className="btn btn-neutral font-bold rounded-full w-full">Continue with Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;