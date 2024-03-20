import Avatar from "./Avatar";
const Profile = ({ name, email, onClick }) => {
  return (
    <div className="flex gap-2 cursor-pointer" onClick={onClick}>
      <span>
        <div className="text-newblack font-bold">{name}</div>
        <div className="">{email}</div>
      </span>
      <Avatar />
    </div>
  );
};
export default Profile;
