import PageHero from "@/components/PageHero";
import SimpleForm from "@/components/SimpleForm";

export default function FurniturePage() {
  return (
    <>
      <PageHero
        title="Furniture Assistance"
        subtitle="Furnish your home with trusted vendors and exclusive deals."
      />

      <SimpleForm
        buttonText="Get Furniture Assistance"
        fields={[
          { label: "Full Name", name: "name", type: "text", placeholder: "Your name" },
          { label: "Phone Number", name: "phone", type: "tel", placeholder: "Contact number" },
          { label: "Property Type", name: "property", type: "text", placeholder: "Apartment / Villa" },
          { label: "Requirements", name: "requirements", type: "textarea", placeholder: "Tell us what you need" },
        ]}
      />
    </>
  );
}