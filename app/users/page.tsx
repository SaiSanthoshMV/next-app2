export default async function Users() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return (
        <>
            <h1>Users Page</h1>
            <ul>
                {users.map((post : { id: number; name: string; }) => (
                    <li key={post.id}>{post.name}</li>
                ))}
            </ul>
        </>
    );
}