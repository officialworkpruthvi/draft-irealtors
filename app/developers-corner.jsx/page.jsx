import PageHero from "../../components/PageHero";
import SimpleForm from "../../components/SimpleForm";

export default function DevelopersCornerPage() {
  return (
    <>
      <PageHero
        title="Developers Corner"
        subtitle="Collaborate with us to showcase your projects to verified buyers."
      />

      <SimpleForm
        buttonText="Submit Collaboration Request"
        fields={[
          { label: "Company Name", name: "company", type: "text" },
          { label: "Contact Person", name: "person", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Project Details", name: "details", type: "textarea" },
        ]}
      />
    </>
  );
}