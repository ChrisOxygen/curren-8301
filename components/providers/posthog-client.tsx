"use client";

import dynamic from "next/dynamic";

const PostHogProviderDynamic = dynamic(
  () =>
    import("@/components/providers/posthog-provider").then(
      (m) => m.PostHogProvider
    ),
  { ssr: false }
);

export function PostHogClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PostHogProviderDynamic>{children}</PostHogProviderDynamic>;
}
