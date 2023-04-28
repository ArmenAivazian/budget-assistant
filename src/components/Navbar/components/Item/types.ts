export interface NavbarItem {
  icon: JSX.Element;
  text: string;
  isActive: boolean;
  onClick: () => void;
}
