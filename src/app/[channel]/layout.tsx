import { type ReactNode } from "react";
import { Header } from "@/ui/components/Header";
import { executeGraphQL } from "@/lib/graphql";
import { ChannelsListDocument } from "@/gql/graphql";

export const metadata = {
  title: "playa3ull ecommerce platform",
  description: "building performant e-commerce experiences with Saleor.",
};

export const generateStaticParams = async () => {
  // the `channels` query is protected
  // you can either hardcode the channels or use an app token to fetch the channel list here

  if (process.env.SALEOR_APP_TOKEN) {
    const channels = await executeGraphQL(ChannelsListDocument, {
      withAuth: false, // disable cookie-based auth for this call
      headers: {
        // and use app token instead
        Authorization: `Bearer ${process.env.SALEOR_APP_TOKEN}`,
      },
    });
    return (
      channels.channels
        ?.filter((channel) => channel.isActive)
        .map((channel) => ({ channel: channel.slug })) ?? []
    );
  } else {
    return [{ channel: "default-channel" }];
  }
};

export default async function RootLayout(props: {
  children: ReactNode;
  params: Promise<{ channel: string }>;
}) {
  return (
    <>
      <Header channel={(await props.params).channel} />
      <div className="flex min-h-[calc(100dvh-64px)] flex-col">
        <main className="flex-1">{props.children}</main>
      </div>
    </>
  );
}
