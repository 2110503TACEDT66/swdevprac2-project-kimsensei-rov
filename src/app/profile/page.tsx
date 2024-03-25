import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";

export default async function profile () {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt);

    return (
        <main className="bg-state-100 m-5 p-5">
            <div className="text-2xl">{profile.data.name}</div>
            <table className="table-auto border-spacing-2"><tbody>
                <tr><td>Email</td><td className="pl-4">{profile.data.email}</td></tr>
                <tr><td>Tel.</td><td className="pl-4">{profile.data.telephone}</td></tr>
                <tr><td>Member Since</td><td className="pl-4">{createdAt.toString()}</td></tr>
                </tbody></table>
        </main>
    );
}