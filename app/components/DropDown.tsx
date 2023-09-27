import React from "react";
interface DropDownProps {
  items: { href: string; text: string }[];
}
const DropdownMenu: React.FC<DropDownProps> = ({ items }) => {
  return (
    <div className="dropdown-menu z-10">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
