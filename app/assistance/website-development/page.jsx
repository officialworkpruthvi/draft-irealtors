import PageHero from "@/components/PageHero";
import SimpleForm from "@/components/SimpleForm";

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <PageHero
        title="Website Development"
        subtitle="Need a high-converting real estate website? Let’s build it."
      />

      <SimpleForm
        buttonText="Request Website Consultation"
        fields={[
          { label: "Full Name", name: "name", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Business Type", name: "business", type: "text" },
          { label: "Project Details", name: "details", type: "textarea" },
        ]}
      />
    </>
  );
}