import React from 'react';

interface NameRole{
  name: string,
  role: string,
}

const NameRoleComponent: React.FC<NameRole> = ({ name, role }) => {
  return (
    <div className="flex flex-col justify-start">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
};

export default NameRoleComponent;
