import { Menu } from '@/common';
import { MenuListItem } from './MenuListItem';

interface IProps {
  onClose?: () => void;
}

export const MenuList: React.FC<IProps> = (props) => {
  const { onClose } = props;

  return (
    <ul className="flex items-center justify-between gap-24">
      {Menu.options.map((menu) => {
        return (
          <li key={menu.id} onClick={onClose}>
            <MenuListItem menu={menu} />
          </li>
        );
      })}
    </ul>
  );
};
