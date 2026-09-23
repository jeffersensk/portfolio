import { LANDING_PAGE } from "../constants/content";

export function LandingPage() {

    return(
        <>
            <title>Jeff's Portfolio</title>
            <div>
                <h1>{LANDING_PAGE.title}</h1>

                <h2>{LANDING_PAGE.subtitle}</h2>

                <p>{LANDING_PAGE.descriptionParagraphs}</p>

            </div>
        </>
    );
}