type ProductDetailsPageProps = {
  params: { id: string };
};

export default function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  return <main className="p-8">Product {params.id}</main>;
}
