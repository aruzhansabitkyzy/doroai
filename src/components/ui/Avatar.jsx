import avatar from "../../images/default_avatar.png";
const Avatar = ({ image = avatar }) => {
  return (
    <div className="bg-maine w-12 h-12 rounded-full px-3 py-3">
      <img src={image} />
    </div>
  );
};
export default Avatar;
