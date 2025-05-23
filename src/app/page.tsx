import Image from "next/image";
import Navbar from "@/components/navbar"
import Main from "@/components/main"
import Text from "@/components/text"
import Truck from "@/components/trucks"
import Sayac from "@/components/sayac"
import Trucks from "@/components/trucks2"
import Acıklama from "@/components/açıklama/index"
import Hizmet from "@/components/hizmettanıtım"
import Referanslar from "@/components/referanslar"
import Nedenakr from "@/components/nedenakr"
import Sorular from "@/components/sorular"
import Yan from "@/components/yanyana"


export default function Home() {
  return (
    <div >
      <Navbar/>
      <Main/>
      <Text/>
      <Truck/>
      <Sayac/>
      <Trucks/>
      <Acıklama/>
      <Hizmet/>
      <Referanslar/>
      <Sorular/>
      <Yan/>
      <Nedenakr/>
    </div>
  );
}
