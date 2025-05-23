import { Button } from "@/components/ui/button"
import Linkler from "@/components/navbar/linkler"
import { GiHamburgerMenu } from "react-icons/gi";
import Responsivelink from "./responsivelink";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function SheetDemo() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="text-white max-md:text-xs py-1 px-2 font-bold border-none bg-transparent " variant="outline"><GiHamburgerMenu size={22} /></Button>
            </SheetTrigger>
            <SheetContent className="overflow-auto" side={"left"}>
                <SheetHeader>
                    <SheetTitle className="flex items-center justify-center"><img className="w-32 " src="akrlogosiyah.webp" alt="Arlan Medya Siyah logo" /></SheetTitle>
                    <SheetDescription className=" text-center">
                        Zamanında, Hasarsız, Memnuniyetle
                        <p className="font-bold">0549 175 0025</p>
                        
                    </SheetDescription>
                </SheetHeader>

                <div className=" py-4 w-full">
                    <Responsivelink />
                </div>

            </SheetContent>
        </Sheet>
    )
}
