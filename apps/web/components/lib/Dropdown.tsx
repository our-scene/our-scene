import { ReactNode } from 'react';

const NavBarMenuRight = () => {
  return (
    <label tabIndex={0} className="p-2 space-y-2 bg-secondary rounded shadow block">
      <span className="block w-8 h-0.5 bg-primary"></span>
      <span className="block w-8 h-0.5 bg-primary"></span>
      <span className="block w-8 h-0.5 bg-primary"></span>
    </label>
  );
};

type DropdownMenuProps = {
  iconComponent?: ReactNode;
  menuItems: ReactNode[];
};
export const DropdownMenu = ({ iconComponent = <NavBarMenuRight />, menuItems }: DropdownMenuProps) => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      {iconComponent}
      <ul className="dropdown-content menu bg-secondary shadow rounded-box w-44 text-primary" tabIndex={0}>
        {menuItems.map((item: ReactNode, idx: number) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
