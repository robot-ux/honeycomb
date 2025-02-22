import React, { useCallback } from 'react';
import { Slide, ToastContainer } from 'react-toastify';

import { Testable, useBuildTestId } from '../../test-ids';
import { Icon } from '../../../components/Icon';

import { StyledToastContainer, StyledButton, Styles } from './styled';

export const AUTO_CLOSE_DEFAULT_DURATION = 3000;

export type Props = Pick<
  React.ComponentPropsWithoutRef<typeof ToastContainer>,
  'position' | 'children' | 'className'
> &
  Testable & {
    autoClose?: boolean | number;
  };

export const Component = ({
  autoClose = true,
  position = 'bottom-center',
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  const close = useCallback(
    ({
      closeToast,
    }: {
      closeToast: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    }) => (
      <StyledButton
        variant="secondary"
        size="increased"
        shape="square"
        data-testid={buildTestId('close-btn')}
        onClick={closeToast}
      >
        <Icon.Cross />
      </StyledButton>
    ),
    [buildTestId],
  );

  return (
    <>
      <Styles />
      <StyledToastContainer
        {...otherProps}
        autoClose={autoClose === true ? AUTO_CLOSE_DEFAULT_DURATION : autoClose}
        closeButton={close}
        hideProgressBar
        newestOnTop={position === 'bottom-center'}
        position={position}
        transition={Slide}
        data-testid={buildTestId()}
      />
    </>
  );
};

Component.displayName = 'ToastProvider';
