import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Name of Website",
    description: "Learn more about our company",
    keywords: "about, company, information, mission, ai, saas",
    twitter: {
        card: "summary_large_image",
        title: "About Us | Twitter",
    }
};

export default function about (){
    console.log("Is this a Server or Client component?");
    return <div>About Us</div>
}