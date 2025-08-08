import React from "react";
// import "./AvatarGroup.css";

type AvatarGroupProps = {
  users: {
    name: string;
    imageUrl: string;
  }[];
  maxVisible?: number;
};

const AvatarGroup: React.FC<AvatarGroupProps> = ({ users, maxVisible = 3 }) => {
  const visibleUsers = users.slice(0, maxVisible);
  const remainingCount = users.length - maxVisible;

  const names = users
    .slice(0, 3)
    .map((u) => u.name)
    .join(", ");
  const nameLabel =
    remainingCount > 0 ? `${names} +${remainingCount} others` : names;

  return (
    <div className="avatar-group">
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
