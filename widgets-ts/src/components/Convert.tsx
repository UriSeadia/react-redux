import React, { useState, useEffect } from 'react';
import { getTranslation } from '../api/widgets.api';
import { TConvertProps } from '../models/types';

const Convert = ({ language, text }: TConvertProps) => {
  const [translated, setTranslated] = useState<string>('');
  const [debouncedText, setDebouncedText] = useState<string>(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const translate = async (): Promise<void> => {
      const response = await getTranslation(debouncedText, language);
      setTranslated(response);
    };

    translate();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">
        {translated}
      </h1>
    </div>
  );
};

export default Convert;
