"use client"; // use client component for browser interactivity

export default function Button(){
    return <button onClick={() => alert("hello")}> Click Me! </button>;
}