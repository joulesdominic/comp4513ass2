//buttons: https://v1.tailwindcss.com/components/buttons
const LoginView = ({ onLogin, onRegister }) => {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen bg-cover bg-center text-white" style={{backgroundImage: `url("../images/login.jpg")`}}>
            <h1 className="text-4xl font-bold mb-8">F1 Dashboard Project</h1>
            <input className="w-64 px-4 py-2 mb-4 rounded-md shadow-md text-black" type='text' placeholder="Email" />
            <input className="w-64 px-4 py-2 mb-4 rounded-md shadow-md text-black" type='password' placeholder="Password" />
            <button className="w-64 px-4 py-2 mb-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-bold shadow-md" onClick={onLogin}>Login</button>
            <button className="w-64 px-4 py-2 mb-4 rounded-md bg-gray-500 hover:bg-gray-600 text-white font-bold shadow-md" onClick={onRegister}>Register</button>
            <p className="text-sm">Photo by <a className="underline" href="https://unsplash.com/@louisverplancken?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Louis Verplancken</a> on <a className="underline" href="https://unsplash.com/photos/a-person-riding-a-motorcycle-on-a-race-track-J61cPe9z6bU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p>
        </div>
    );
};

export default LoginView;
