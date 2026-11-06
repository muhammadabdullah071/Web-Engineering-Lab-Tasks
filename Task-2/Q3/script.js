const userProfile = {
  id: 101,
  name: "Muhammad Abdullah",
  contact: {
    email: "abdullah@example.com",
    address: {
      city: "Lahore",
      country: "Pakistan",
      postalCode: "54000",
    },
    phone: {
      number: "N/A",
    },
  },
  preferences: {
    notifications: {
      email: true,
    },
    language: "English",
  },
};

const phoneNumber = userProfile.contact?.phone?.number;
const postalCode = userProfile.contact?.address?.postalCode;
const language = userProfile.preferences?.language;

const displayName = userProfile.name ?? "Unknown user";
const email = userProfile.contact?.email ?? "No email available";
const city = userProfile.contact?.address?.city ?? "Unknown city";
const country =
  userProfile.contact?.address?.country ?? "Country not provided";
const phone = phoneNumber ?? "Phone number not provided";
const code = postalCode ?? "Postal code not provided";
const preferredLanguage = language ?? "Language not selected";
const smsNotifications =
  userProfile.preferences?.notifications?.sms ?? false;

const profileSummary = {
  "Name": displayName,
  "Email": email,
  "Location": `${city}, ${country}`,
  "Phone": phone,
  "Postal code": code,
  "Preferred language": preferredLanguage,
  "SMS notifications": smsNotifications ? "Enabled" : "Disabled",
};

console.log("User profile:", userProfile);
console.log("Profile summary:", profileSummary);

document.querySelector("#output").textContent = JSON.stringify(
  profileSummary,
  null,
  2,
);
