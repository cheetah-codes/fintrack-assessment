import React from "react";

const AvatarGroup: React.FC<AvatarGroupProps> = ({ users, maxVisible = 4 }) => {
  const visibleUsers = users.slice(0, maxVisible);
  const remainingCount = users.length - maxVisible;

  const names = users
    .slice(0, 3)
    .map((u) => u.name)
    .join(", ");
  const nameLabel =
    remainingCount > 0 ? `${names} +${remainingCount} others` : names;

  return (
    <div className="avatar-group flex items-center font-sans font-[14px] text-textLight">
      <div className="avatars">
        {visibleUsers.map((user, index) => (
          <img
            key={index}
            src={user.imageUrl}
            alt={user.name}
            className="avatar"
            style={{ zIndex: visibleUsers.length - index }}
          />
        ))}
      </div>
      <span className="label">{nameLabel}</span>
    </div>
  );
};

export default AvatarGroup;

// .avatar-group {
//   display: flex;
//   align-items: center;
//   font-family: sans-serif;
//   font-size: 14px;
//   color: #555;
// }

// .avatars {
//   display: flex;
//   margin-right: 8px;
//   position: relative;
// }

// .avatar {
//   width: 32px;
//   height: 32px;
//   border-radius: 50%;
//   border: 2px solid white;
//   object-fit: cover;
//   position: relative;
//   margin-left: -10px;
//   box-shadow: 0 0 0 1px #ccc;
// }

// .avatar:first-child {
//   margin-left: 0;
// }

// .label {
//   white-space: nowrap;
// }
