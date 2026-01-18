import { logoutUser } from "../services/authService";

export default function Dashboard(){

    return(
        <div>
            <h1>Dashboard</h1>
            <button onClick={async () => await logoutUser()}>Logout</button>
        </div>
    )
}