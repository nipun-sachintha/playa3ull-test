import { type ReactNode } from "react";
import { Header } from "@/ui/components/Header";

export const metadata = {
  title: "playa3ull ecommerce platform",
  description: "building performant e-commerce experiences with Saleor.",
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
