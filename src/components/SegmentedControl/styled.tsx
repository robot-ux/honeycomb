import styled, { css } from 'styled-components';
import { em, transitions } from 'polished';

import { boxSizing } from '../../modules/box-sizing';
import { Shape as ComponentShape } from '../internal/Shape';
import { Size, increased, huge, giant } from '../internal/Size';
import { styleless } from '../Styleless';

export const variants = ['segmented', 'tab'] as const;
export type Variant = typeof variants[number];

export type Shape = Omit<ComponentShape, 'square'>;

export interface ContainerProps {
  size: Size;
  shape: Shape;
  disabled?: boolean;
  variant: Variant;
}

export interface ElementProps {
  size: Size;
  active: boolean;
  variant: Variant;
}

const activeElement = css<{ variant: Variant }>`
  cursor: auto;

  ${({ variant }) =>
    (variant === 'segmented' &&
      css`
        background: ${({ theme }) => theme.honeycomb.color.primary.normal};
        color: ${({ theme }) =>
          theme.honeycomb.color.readable.normal(theme.honeycomb.color.primary.normal)};
      `) ||
    (variant === 'tab' &&
      css`
        border-bottom: 2px solid ${({ theme }) => theme.honeycomb.color.primary.normal};
        color: ${({ theme }) => theme.honeycomb.color.primary.normal};
      `)};
`;

export const Element = styled.li<ElementProps>`
  cursor: pointer;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)};
  font-weight: 600;

  ${({ variant }) =>
    (variant === 'segmented' &&
      css`
        border-radius: ${({ theme }) =>
          em(theme.honeycomb.radius.normal, theme.honeycomb.size.reduced)};
      `) ||
    (variant === 'tab' &&
      css`
        border-bottom: 2px solid transparent;
      `)};

  ${({ theme }) => transitions(['background', 'color'], theme.honeycomb.duration.normal)};
  ${({ active }) => active && activeElement}
`;

export const Container = styled.ul<ContainerProps>`
  ${styleless};
  ${boxSizing};

  display: flex;
  width: 100%;
  position: relative;
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};

  ${({ size }) => size === 'increased' && increased};
  ${({ size }) => size === 'huge' && huge};
  ${({ size }) => size === 'giant' && giant};
  ${({ shape }) =>
    shape === 'fit' &&
    css`
      width: auto;
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
    `};

  ${({ variant }) =>
    (variant === 'segmented' &&
      css`
        background: ${({ theme }) => theme.honeycomb.color.secondary.normal};
        color: ${({ theme }) =>
          theme.honeycomb.color.readable.normal(theme.honeycomb.color.secondary.normal)};
        border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};
      `) ||
    (variant === 'tab' &&
      css`
        border-bottom: 1px solid ${({ theme }) => theme.honeycomb.color.border};
      `)};
`;

export const Scroll = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  overflow-x: auto;
  scroll-behavior: smooth;
`;