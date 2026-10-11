export interface FormSubmission {
  id: string;
  form: string;
  subject: string;
  fromName: string;
  fromEmail: string;
  message: string;
  dateCreated: string;
}

export const INITIAL_SUBMISSIONS: FormSubmission[] = [
  {
    id: "310219",
    form: "contact",
    subject: "Feature my business",
    fromName: "Eleanor Vance",
    fromEmail: "eleanor.vance@cotswoldheritagetours.co.uk",
    message: "We have recently opened a boutique private guided tour operation covering the North Cotswolds and would love to be considered for inclusion in the Stevenson's guide under high-end regional experiences.",
    dateCreated: "11/10/2026",
  },
  {
    id: "310218",
    form: "contact",
    subject: "A place in the guide",
    fromName: "James MacGregor",
    fromEmail: "j.macgregor@highlandviews.org",
    message: "Regarding the entry for Eilean Donan Castle, the seasonal winter operating hours listed for November to February were recently updated. You may want to review and reflect this in the online directory.",
    dateCreated: "11/10/2026",
  },
  {
    id: "310217",
    form: "contact",
    subject: "The book",
    fromName: "Claire Beaumont",
    fromEmail: "claire.beaumont@bathchronicle.com",
    message: "I am writing a cultural review for the weekend press on independent British travel literature and would appreciate speaking with the editorial team regarding the upcoming 2027 hardcover edition.",
    dateCreated: "10/10/2026",
  },
  {
    id: "310216",
    form: "contact",
    subject: "A place in the guide",
    fromName: "Dr. Alistair Finch",
    fromEmail: "afinch@bodleian-heritage.ac.uk",
    message: "Thank you for the wonderful write-up on Oxford's historical libraries. We noticed an attribution note on the Divinity School photograph that could use a slight clarification regarding archivist permissions.",
    dateCreated: "09/10/2026",
  },
  {
    id: "310215",
    form: "contact",
    subject: "The apps",
    fromName: "Sophie Tremblay",
    fromEmail: "sophie.tremblay@voyages-uk.fr",
    message: "Does the mobile application currently support offline map caching for hikers in the Lake District and Snowdonia? Many of our French tour groups have limited mobile reception in the valleys.",
    dateCreated: "08/10/2026",
  },
  {
    id: "310214",
    form: "contact",
    subject: "Feature my business",
    fromName: "Marcus Holloway",
    fromEmail: "marcus@cornishcoaststays.com",
    message: "We manage six restored cliffside cottages along the South West Coast Path near St Ives. We'd like to apply for the Stevenson's Accommodation standard review process.",
    dateCreated: "07/10/2026",
  },
  {
    id: "310213",
    form: "contact",
    subject: "General Inquiry",
    fromName: "Gareth Davies",
    fromEmail: "gdavies@angleseyheritage.wales",
    message: "Inquiring about potential partnership opportunities for the upcoming Welsh Year of the Trails initiative and regional spotlight features.",
    dateCreated: "05/10/2026",
  },
];
