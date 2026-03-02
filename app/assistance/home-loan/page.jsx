import PageHero from "@/components/PageHero";
import SimpleForm from "@/components/SimpleForm";

export default function HomeLoanPage() {
  return (
    <>
      <PageHero
        title="Home Loan Assistance"
        subtitle="Get expert guidance and the best home loan options tailored for you."
      />

      <SimpleForm
        buttonText="Request Home Loan Help"
        fields={[
          { label: "Full Name", name: "name", type: "text", placeholder: "Your name" },
          { label: "Phone Number", name: "phone", type: "tel", placeholder: "10-digit number" },
          { label: "City", name: "city", type: "text", placeholder: "Your city" },
          { label: "Loan Requirement", name: "amount", type: "text", placeholder: "Approx loan amount" },
        ]}
      />
    </>
  );
}