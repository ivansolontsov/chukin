"use client";

import React from "react";
import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const GmailIconSvgCode = () => (
    <svg width="15px" height="15px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path stroke="#000000" stroke-linejoin="round" stroke-width="12" d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"/></svg>
);

export const IconGmail = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={GmailIconSvgCode} {...props} />
);