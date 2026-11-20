import { useState } from "react";
import CancellationPolicy from "./CancellationPolicy";

type Field = { name: string; label: string; type?: string; autoComplete?: string; pattern?: string; placeholder?: string };

const SECTIONS: { title: string; rows: Field[][] }[] = [
  {
    title: "Contact Detail",
    rows: [
      [{ name: "firstName", label: "First Name", autoComplete: "given-name" }, { name: "lastName", label: "Last Name", autoComplete: "family-name" }],
      [{ name: "email", label: "Email", type: "email", autoComplete: "email" }, { name: "phoneNumber", label: "Phone Number", type: "tel", autoComplete: "tel" }],
    ],
  },
  {
    title: "Pay with",
    rows: [
      [{ name: "cardNumber", label: "Card Number", autoComplete: "cc-number", pattern: "[0-9 ]{12,19}", placeholder: "1234 5678 9012 3456" }],
      [{ name: "expirationDate", label: "Expiration Date", autoComplete: "cc-exp", pattern: "(0[1-9]|1[0-2])\\/[0-9]{2}", placeholder: "MM/YY" }, { name: "cvv", label: "CVV", autoComplete: "cc-csc", pattern: "[0-9]{3,4}", placeholder: "123" }],
    ],
  },
  {
    title: "Billing Address",
    rows: [
      [{ name: "streetAddress", label: "Street Address", autoComplete: "street-address" }],
      [{ name: "city", label: "City", autoComplete: "address-level2" }, { name: "state", label: "State", autoComplete: "address-level1" }],
      [{ name: "zipCode", label: "Zip Code", autoComplete: "postal-code" }, { name: "country", label: "Country", autoComplete: "country-name" }],
    ],
  },
];

const BookingForm = () => {
  const [confirmed, setConfirmed] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // A demo: nothing is sent or charged
    setConfirmed(`Thanks, ${data.get("firstName")}! Your booking is confirmed. A receipt will be sent to ${data.get("email")}.`);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <form onSubmit={handleSubmit}>
        {SECTIONS.map((section, index) => (
          <fieldset key={section.title} className={index ? "mt-6" : ""}>
            <legend className="text-xl font-semibold">{section.title}</legend>
            {section.rows.map((row, r) => (
              <div key={r} className={`grid grid-cols-1 gap-4 mt-4 ${row.length > 1 ? "sm:grid-cols-2" : ""}`}>
                {row.map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type ?? "text"}
                      autoComplete={field.autoComplete}
                      pattern={field.pattern}
                      placeholder={field.placeholder}
                      required
                      className="border p-2 w-full mt-2 rounded"
                    />
                  </div>
                ))}
              </div>
            ))}
          </fieldset>
        ))}

        <button type="submit" className="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full">
          Confirm &amp; Pay
        </button>
        {confirmed && <p role="status" className="mt-3 text-green-700">{confirmed}</p>}
      </form>

      <CancellationPolicy />
    </div>
  );
};

export default BookingForm;
