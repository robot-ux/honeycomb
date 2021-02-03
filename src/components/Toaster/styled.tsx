import styled, { createGlobalStyle } from 'styled-components';
import { em } from 'polished';

import toastify from '../../../node_modules/react-toastify/dist/ReactToastify.min.css';
import { Button } from '../Button';
import { SIZES } from '../internal/useWindowSize';

const TOAST_WIDTH = 278;
const TOAST_HEIGHT = 56;

export const mdScreen = `min-width: ${em(SIZES.md)}`;

export const Styles = createGlobalStyle`
  ${toastify};

  .Toastify__toast-container {
    margin-left: ${({ theme }) => em(theme.honeycomb.size.small)};
    margin-right: ${({ theme }) => em(theme.honeycomb.size.small)};
    margin-bottom: -${({ theme }) => em(theme.honeycomb.size.small)};
    width: calc(100vw - ${({ theme }) => em(theme.honeycomb.size.increased)});

    @media (${mdScreen}) {
      max-width: ${em(TOAST_WIDTH)};
      margin: 0;
      margin-bottom: -${({ theme }) => em(theme.honeycomb.size.small)};
    }
  }
  .Toastify__toast-container--top-left {
    top: ${({ theme }) => em(theme.honeycomb.size.small)};
    left: ${({ theme }) => em(theme.honeycomb.size.small)};
  }
  .Toastify__toast-container--top-center {
    top: ${({ theme }) => em(theme.honeycomb.size.small)};
  }
  .Toastify__toast-container--top-right {
    top: ${({ theme }) => em(theme.honeycomb.size.small)};
    right: ${({ theme }) => em(theme.honeycomb.size.small)};
  }
  .Toastify__toast-container--bottom-left {
    bottom: ${({ theme }) => em(theme.honeycomb.size.small)};
    left: ${({ theme }) => em(theme.honeycomb.size.small)};
  }
  .Toastify__toast-container--bottom-center {
    bottom: ${({ theme }) => em(theme.honeycomb.size.small)};
  }
  .Toastify__toast-container--bottom-right {
    bottom: ${({ theme }) => em(theme.honeycomb.size.small)};
    right: ${({ theme }) => em(theme.honeycomb.size.small)};
  }
  .Toastify__toast {
    min-height: ${em(TOAST_HEIGHT)};
    box-shadow: ${({ theme }) => theme.honeycomb.shadow.box.normal};
    margin-bottom: ${({ theme }) => em(theme.honeycomb.size.small)};
    padding: 0;
    background-color: ${({ theme }) => theme.honeycomb.color.bg.normal};
  }
  .Toastify__toast-body {
    display: flex;
    margin: 0;
    padding: 0;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.small)};
  margin-right: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.small)};
`;