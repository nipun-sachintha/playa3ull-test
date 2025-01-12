import { notFound } from "next/navigation";
import { ProductListPaginatedDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { Pagination } from "@/ui/components/Pagination";
import { ProductList } from "@/ui/components/ProductList";
import { ProductsPerPage } from "@/app/config";

export const metadata = {
  title: "Products",
  description: "All products in Saleor Storefront",
};

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ channel: string }>;
  searchParams: Promise<{
    cursor: string | undefined;
  }>;
}) {
  const cursor =
    typeof (await searchParams).cursor === "string"
      ? (await searchParams).cursor
      : null;
  const channel = (await params).channel;

  const { products } = await executeGraphQL(ProductListPaginatedDocument, {
    variables: {
      first: ProductsPerPage,
      after: cursor,
      channel: channel,
    },
    revalidate: 60,
  });

  if (!products) {
    notFound();
  }

  const newSearchParams = new URLSearchParams({
    ...(products.pageInfo.endCursor && { cursor: products.pageInfo.endCursor }),
  });

  return (
    <section className="mx-auto max-w-7xl p-8 pb-16">
      <h2 className="sr-only">Product list</h2>
      <ProductList products={products.edges.map((e) => e.node)} />
      <Pagination
        pageInfo={{
          ...products.pageInfo,
          basePathname: `/products`,
          urlSearchParams: newSearchParams,
        }}
      />
    </section>
  );
}
