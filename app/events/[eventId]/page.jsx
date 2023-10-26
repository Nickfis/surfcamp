import SignupForm from "@/app/_components/Events/SignupForm";
import {
  fetchDataFromStrapi,
  fetchIndividualEvent,
} from "@/utils/strapi.utils";
import axios from "axios";

export default async function Page({ params }) {
  const { eventId } = params;
  const event = await fetchIndividualEvent(eventId);

  console.log(event.data.data);

  return (
    <main className="events-page">
      <SignupForm />
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
