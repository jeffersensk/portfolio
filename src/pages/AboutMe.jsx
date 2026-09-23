import { ABOUT_PAGE } from "../constants/content";

export function AboutMe() {

    return(
        <>
            <title>Jeff's Portfolio</title>
            <div>
                <h1>{ABOUT_PAGE.title}</h1>

                <p>{ABOUT_PAGE.descriptionParagraphs}</p>

                <p>{ABOUT_PAGE.bottomParagraph}</p>

            </div>
        </>
    );
}