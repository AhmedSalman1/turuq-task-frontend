type ProductDetailsPageProps = {
  params: { id: string };
};

export default function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  return <div className="p-6 lg:p-10">Product {params.id}</div>;
}
