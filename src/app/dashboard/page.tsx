import Header from "@/components/system/Header";

export default function DashboardPage() {
  const breadcrumb = [
    {
      text: "Seja bem vindo ao QuickStock",
    },
  ];

  return (
    <>
      <Header title="Dashboard" breadcrumb={breadcrumb} />
    </>
  );
}
