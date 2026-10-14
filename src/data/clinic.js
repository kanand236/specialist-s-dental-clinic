// ---------------------------------------------------------------
// All clinic details live here. Replace the placeholder values
// with the clinic's real information before going live.
// ---------------------------------------------------------------

export const clinic = {
  name: "Specialist's Dental Clinic",

  // Phone shown on the site and used for the "Call" buttons.
  phone: '+91 00000 00000',
  phoneHref: 'tel:+910000000000',

  // WhatsApp number with country code, digits only (no + or spaces).
  // Booking requests from the form open a chat with this number.
  whatsapp: '910000000000',

  email: 'hello@example.com',

  address: ['Shop / building name, street', 'Area, City, State, PIN code'],

  // Paste the clinic's Google Maps link here.
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Specialist%27s+Dental+Clinic",

  hours: [
    { days: 'Monday to Saturday', time: '10:00 am to 8:00 pm' },
    { days: 'Sunday', time: 'By appointment' },
  ],

  doctor: {
    name: 'Dr. [Doctor name]',
    title: 'BDS, MDS',
    initials: 'Dr',
    bio: 'Add the doctor’s qualifications, years of practice and areas of interest here. This is placeholder text until the clinic shares the details.',
  },
}
