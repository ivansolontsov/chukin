"use client";

import React from "react";
import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const InstaIconSvgCode = () => (
    <svg width="32px" height="32px" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" fill="none" width="20" height="20" />
    <g><path d="M12.7 10c0-1.5-1.2-2.7-2.7-2.7S7.3 8.5 7.3 10s1.2 2.7 2.7 2.7c1.5 0 2.7-1.2 2.7-2.7zm1.4 0c0 2.3-1.8 4.1-4.1 4.1S5.9 12.3 5.9 10 7.7 5.9 10 5.9s4.1 1.8 4.1 4.1zm1.1-4.3c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .5 1 1zM10 3.4c-1.2 0-3.7-.1-4.7.3-.7.3-1.3.9-1.5 1.6-.4 1-.3 3.5-.3 4.7s-.1 3.7.3 4.7c.2.7.8 1.3 1.5 1.5 1 .4 3.6.3 4.7.3s3.7.1 4.7-.3c.7-.3 1.2-.8 1.5-1.5.4-1.1.3-3.6.3-4.7s.1-3.7-.3-4.7c-.2-.7-.8-1.3-1.5-1.5-1-.5-3.5-.4-4.7-.4zm8 6.6v3.3c0 1.2-.4 2.4-1.3 3.4-.9.9-2.1 1.3-3.4 1.3H6.7c-1.2 0-2.4-.4-3.4-1.3-.8-.9-1.3-2.1-1.3-3.4V10 6.7c0-1.3.5-2.5 1.3-3.4C4.3 2.5 5.5 2 6.7 2h6.6c1.2 0 2.4.4 3.4 1.3.8.9 1.3 2.1 1.3 3.4V10z" /></g>
  </svg>
);

export const IconInsta = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={InstaIconSvgCode} {...props} />
);
