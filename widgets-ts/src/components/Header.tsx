import React, { FC } from 'react';
import Link from './Link';

const Header: FC = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" text="Accordion" />
      <Link href="/list" text="Search" />
      <Link href="/dropdown" text="Dropdown" />
      <Link href="/translate" text="Translate" />
    </div>
  );
};

export default Header;
