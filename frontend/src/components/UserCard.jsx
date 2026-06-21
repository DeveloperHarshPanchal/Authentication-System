export default function UserCard({ user }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold">{user?.username}</h2>

      <p>{user?.email}</p>

      <span className="text-green-600 font-semibold">Verified User</span>
    </div>
  );
}
