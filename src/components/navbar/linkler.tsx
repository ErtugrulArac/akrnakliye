"use client"

import * as React from "react"
import { RiHome4Line } from "react-icons/ri"
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white max-md:text-xs py-1 px-2 font-bold bg-transparent max-md:text-black">
            Menü
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-full">
            <ul className="grid gap-3 p-4 md:w-[400px] max-md:w-full lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink className="bg-black text-white" asChild>
                  <a
                    title="AKR Anasayfa"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium flex items-center flex-col">
                      <RiHome4Line size={70} />
                      <p className="font-bold opacity-80">Anasayfa</p>
                    </div>
                    <p className="text-xs text-white opacity-70 text-center">
                      Anasayfa'ya dönerek AKR Nakliyat hakkında detaylı bilgi alabilirsiniz.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>

              <ListItem href="/hakkimizda" title="Hakkımızda">
                Taşımacılıkta güven, hız ve müşteri memnuniyetini ilke edinmiş köklü bir firmayız.
              </ListItem>

              <ListItem href="/iletisim" title="İletişim">
                Taşınma sürecinizle ilgili her sorunuz için bize dilediğiniz zaman ulaşabilirsiniz.
              </ListItem>

              <ListItem href="/#sorular" title="Bilgi">
                Hizmet süreçlerimiz, fiyatlandırma ve taşımacılık detayları
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          title={title}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
