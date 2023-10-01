import { Link } from "react-router-dom";

const Login = () => {

    const handleLoggedIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }

    return (
        <div>
            <div className="text-center mb-5">
                <h1 className="text-4xl font-bold">Login now!</h1>
            </div>
            <div className="hero-content">
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;