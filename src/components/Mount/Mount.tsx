"use client";

import React, { useEffect, useState } from "react";

export interface MountProps {
  children: React.ReactNode;
}

export const Mount = ({ children }: MountProps) => {
  const [mount, setMount] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setMount(true);
      return;
    }
  }, []);

  if (mount) {
    return children;
  }
  return <></>;
};
