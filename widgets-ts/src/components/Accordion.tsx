import React, { useState, FC, Fragment } from 'react';

interface IAccordionItems {
  title: string;
  content: string;
}

interface IAccordion {
  items: IAccordionItems[];
}

const Accordion: FC<IAccordion> = ({ items }) => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onTitleClick = (index: number) => {
    setActiveIndex(index);
  };

  const renderedItems: JSX.Element[] = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  );
};

export default Accordion;
