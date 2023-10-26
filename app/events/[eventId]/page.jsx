import ReactMarkdown from "react-markdown";
import SignupForm from "@/app/_components/Events/SignupForm";
import {
  fetchDataFromStrapi,
  fetchIndividualEvent,
} from "@/utils/strapi.utils";

export default async function Page({ params }) {
  const { eventId } = params;
  const event = await fetchIndividualEvent(eventId);

  const descriptionMarkdown = (
    <ReactMarkdown className="copy">{event.description}</ReactMarkdown>
  );

  const pricing = {
    singlePrice: event.singlePrice,
    sharedPrice: event.sharedPrice,
  };

  return (
    <main className="events-page">
      <SignupForm
        headline={event.name}
        infoText={descriptionMarkdown}
        buttonLabel="Sign Up"
        pricing={pricing}
      />
    </main>
  );
}

export async function generateStaticParams() {
  try {
    const events = await fetchDataFromStrapi("events");
    const slugs = events.map((event) => ({
      eventId: String(event.id),
    }));

    return slugs;
  } catch (err) {
    console.log("Error fetching slugs for events", err);
  }
}
