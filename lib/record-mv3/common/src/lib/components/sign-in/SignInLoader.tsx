import { styleHelpers } from '@castify/fe-common';
import { Box, Skeleton } from '@mui/material';
import { CastifyLogo } from '../Logo/CastifyLogo';
import { popupStyles } from './SignInLoader.styles';

export const SignInLoader: React.FC = () => {
  const isPopup = window.location.pathname === '/initializer.html';
  if (!isPopup) return null;
  return (
    <Box css={popupStyles.container}>
      <Box css={popupStyles.header}>
        <div css={popupStyles.headerLogo}>
          <CastifyLogo />
        </div>
        <div css={popupStyles.headerSkeletonContainer}>
          <Skeleton
            variant="circular"
            height={`${styleHelpers.pxToRem(40)}rem`}
            width={`${styleHelpers.pxToRem(40)}rem`}
          />
          <Skeleton
            variant="circular"
            height={`${styleHelpers.pxToRem(40)}rem`}
            width={`${styleHelpers.pxToRem(40)}rem`}
          />
        </div>
      </Box>
      <Box css={popupStyles.body}>
        <Skeleton
          height={`${styleHelpers.pxToRem(120)}rem`}
          width={`${styleHelpers.pxToRem(388)}rem`}
        />
        <Box css={popupStyles.middle}>
          <Skeleton
            height={`${styleHelpers.pxToRem(72)}rem`}
            width={`${styleHelpers.pxToRem(80)}rem`}
          />
          <Skeleton
            height={`${styleHelpers.pxToRem(72)}rem`}
            width={`${styleHelpers.pxToRem(248)}rem`}
          />
        </Box>
        <Box css={popupStyles.middle}>
          <Skeleton
            height={`${styleHelpers.pxToRem(72)}rem`}
            width={`${styleHelpers.pxToRem(80)}rem`}
          />
          <Skeleton
            height={`${styleHelpers.pxToRem(72)}rem`}
            width={`${styleHelpers.pxToRem(248)}rem`}
          />
        </Box>
        <Skeleton height={`${styleHelpers.pxToRem(100)}rem`} width="100%" />
      </Box>
    </Box>
  );
};
