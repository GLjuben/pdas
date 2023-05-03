function ProfileCard({ title, handle, image }) {
  // const { title, handle } = props;
  return (
    <div>
      <img src={image} alt="pda logo" />
      <div>{title}</div>
      <div>{handle}</div>
    </div>
  );
}

export default ProfileCard;
