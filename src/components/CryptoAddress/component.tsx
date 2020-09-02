import React, { useMemo, useState } from 'react';

import { Icon } from '../Icon';
import { useWindowWidth, widths } from '../internal/useWindowWidth';
import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';
import { CopyToClipboard } from '../CopyToClipboard';

import { Container, CryptoAddress, StyledModal, StyledQRCode } from './styled';

export type Props = Testable & {
  value: string;
  className?: string;
  canCopyToClipboard?: boolean;
  canScanQrCode?: boolean;
};

export const Component = ({
  value,
  className,
  canCopyToClipboard = true,
  canScanQrCode = true,
  'data-testid': testId,
}: Props) => {
  const buildTestId = useBuildTestId(testId);
  const [showQRCode, setShowQRCode] = useState(false);

  const width = useWindowWidth();

  const qRCode = useMemo(() => {
    return (
      <Modal.Content>
        <StyledQRCode value={value} />
      </Modal.Content>
    );
  }, [value]);

  const scanQrCodeButton = (
    <Button
      variant="secondary"
      shape="square"
      size="increased"
      onClick={() => setShowQRCode((value) => !value)}
      data-testid={buildTestId('btn-scan-qr-code')}
    >
      <Icon.QRCode />
    </Button>
  );

  return (
    <Container className={className} data-testid={buildTestId()}>
      <CryptoAddress>{value}</CryptoAddress>
      {canScanQrCode && (
        <>
          {width < widths.sm ? (
            <>
              {scanQrCodeButton}
              <StyledModal open={showQRCode} data-testid={buildTestId('modal')}>
                <Modal.Header onClose={() => setShowQRCode(false)} title="QR Code" />
                {qRCode}
              </StyledModal>
            </>
          ) : (
            <Tooltip
              trigger="manual"
              placement="bottom"
              visible={showQRCode}
              interactive={true}
              content={qRCode}
              data-testid={buildTestId('tooltip')}
            >
              {scanQrCodeButton}
            </Tooltip>
          )}
        </>
      )}
      {canCopyToClipboard && (
        <CopyToClipboard value={value} variant="secondary" shape="square" size="increased" />
      )}
    </Container>
  );
};

Component.displayName = 'CryptoAddress';