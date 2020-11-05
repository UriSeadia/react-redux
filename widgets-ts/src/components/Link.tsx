import React, { FC } from 'react';

type TLinkProps = {
  href: string;
  text: string;
};

const Link: FC<TLinkProps> = ({ href, text }) => {

  const onClick = (event: any) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a
      href={href}
      className="item"
      onClick={onClick}
    >
      {text}
    </a>
  );
};

export default Link;
