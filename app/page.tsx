import Image from "next/image";
import { Button } from "@/components/ui/button"
export function ButtonDemo() {
  return <Button>Button</Button>
}
export default function Home() {
  return (
    <main>
          <h1>Arkadiusz Olejniczak</h1>
     <h2>nr albumu: 119219</h2>
     <br></br><br></br><br></br><br></br><br></br><br></br>
     <h3>Witam na mojej stronie</h3><br></br>
<center>
     <img src="https://e7.pngegg.com/pngimages/270/473/png-clipart-dark-souls-solaire-of-astora-drawing-knight-bloodborne-dark-souls-dark-souls-solaire-of-astora-thumbnail.png"></img>
</center>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Button
</button>



</main>
  );
}
