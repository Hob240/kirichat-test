"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function CreateAgentRedirectPage() {
  const params = useParams<{ workspaceId: string }>();
  const router = useRouter();
  const ws = params?.workspaceId ?? "framework";

  useEffect(() => {
    router.replace(`/dashboard/${ws}/agent-new/documents`);
  }, [ws, router]);

  return null;
}
