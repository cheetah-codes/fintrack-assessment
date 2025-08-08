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
    <div className="font-sans flex items-center text-sm text-[#15272D9E] ml-2.5">
      <div className="flex mr-2 relative">
        {visibleUsers.map((user, index) => (
          <img
            key={index}
            src={user.imageUrl}
            alt={user.name}
            className="avatar w-8 h-8 rounded-full border-0.5 border-white relative -ml-2.5 object-cover shadow-[0_0_0_1px_#ccc]"
            style={{ zIndex: visibleUsers.length - index }}
          />
        ))}
      </div>
      <span className="label">{nameLabel}</span>
    </div>
  );
};

export default AvatarGroup;
