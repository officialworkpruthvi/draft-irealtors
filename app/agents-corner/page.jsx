import PageHero from "@/components/PageHero";
import SimpleForm from "@/components/SimpleForm";

export default function AgentsCornerPage() {
  return (
    <>
      <PageHero
        title="Agents Corner"
        subtitle="Partner with us and grow your real estate business."
      />

      <SimpleForm
        buttonText="Apply for Collaboration"
        fields={[
          { label: "Agent Name", name: "name", type: "text" },
          { label: "Phone Number", name: "phone", type: "tel" },
          { label: "City", name: "city", type: "text" },
          { label: "Experience (Years)", name: "experience", type: "text" },
        ]}
      />
    </>
  );
}