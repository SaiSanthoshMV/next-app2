import Button from "./button";

export default async function contact (){
    console.log("Is this a Server or Client component?");

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    return (
        <>
            <div>Contact Us</div>
            <Button />
        </>
    );
}