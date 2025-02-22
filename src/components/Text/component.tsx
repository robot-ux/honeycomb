import React from 'react';
import { AlignItemsProperty, AlignSelfProperty } from 'csstype';

import { HtmlTag } from '../../modules/html-tag';
import { Testable } from '../../modules/test-ids';

import { Size, Styled, Weight } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'size'> &
  Testable & {
    htmlTag?: HtmlTag;
    alignItems?: AlignItemsProperty;
    alignSelf?: AlignSelfProperty;
    color?: string;
    size: Size;
    weight?: Weight;
  };

export const Component = ({ htmlTag, 'data-testid': testId, ...otherProps }: Props) => {
  return <Styled {...otherProps} as={htmlTag as any} data-testid={testId} />;
};

Component.displayName = 'Text';
