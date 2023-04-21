import { ReactNode } from "react";

type SectionProps = {
    title?: string,
    children: ReactNode
}

export const Section = ({ children , title = "my subheading" }: SectionProps ) => {
     return(
        <Section >
            <h2>{title}</h2>
            <p>{children}</p>
        </Section>
     )
}