"use client"

import React from 'react'
import { RiHome5Line } from "react-icons/ri";
import { SheetClose } from "@/components/ui/sheet"; // Buraya dikkat

import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";

import Link from 'next/link';


const Responsivelink = () => {
    return (
        <div className='gap-11  rounded-lg px-1 py-6 flex w-full flex-col justify-start'>
            <SheetClose asChild>
                <a title='Anasayfa qr menü' className='flex items-center gap-6 text-lg font-semibold' href="/">
                    <RiHome5Line size={30} /> Anasayfa
                </a>
            </SheetClose>

            <SheetClose asChild>
                <Link href="/hakkimizda" className="flex items-center gap-6 text-lg font-medium opacity-90">
                    <FaAddressBook size={30} /> Hakkımızda
                </Link>     
            </SheetClose>

            <SheetClose asChild>
                <a title='Asde Yapı Sineklik Sistemleri' className='flex items-center gap-6 text-lg font-medium opacity-90' href="/iletisim">
                    <FaPhoneSquareAlt size={30} /> İletişim
                </a>
            </SheetClose>

            <SheetClose asChild>
                <a title='Asde Yapı Cambalkon Sistemleri' className='flex items-center gap-6 text-lg font-medium opacity-90' href="/#sorular">
                    <FaBookReader size={30} /> Bilgi
                </a>
            </SheetClose>
        </div>
    )
}

export default Responsivelink
