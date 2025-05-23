import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionNakliye() {
    return (
        <Accordion type="single" collapsible className="w-full xl:w-[80%]">
            <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold text-xl max-md:text-base">
                    AKR Nakliyat ile taşınma süreci nasıl işler?
                </AccordionTrigger>
                <AccordionContent>
                    AKR Nakliyat’ta taşınma süreci tamamen planlı ve güvenlidir. İlk olarak ücretsiz ekspertizle eşyalarınız analiz edilir, ardından taşıma günü ve planlama belirlenir. Profesyonel ekiplerimiz eşyalarınızı dikkatlice paketler, yükler ve yeni adrese sorunsuz bir şekilde taşır. Tüm adımlar deneyimli personelimiz tarafından yürütülür ve müşteri memnuniyeti odaklı hizmet sunulur.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger className="font-bold text-xl max-md:text-base">
                    Nakliye sırasında eşyalarımın zarar görmemesi için ne yapılıyor?
                </AccordionTrigger>
                <AccordionContent>
                    Eşyalarınızın güvenliği için her biri özel ambalajlama malzemeleriyle paketlenir. Kırılabilir ürünler ekstra koruma ile sarılır, mobilyalar battaniye ve streç filmle kaplanır. Eşyalar araç içine düzenli şekilde yerleştirilir. Taşıma sırasında herhangi bir hasar riskini en aza indirmek için tüm işlemler uzman ekiplerce dikkatle gerçekleştirilir.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger className="font-bold text-xl max-md:text-base">
                    Nakliyat fiyatları nasıl belirleniyor?
                </AccordionTrigger>
                <AccordionContent>
                    Taşınma fiyatları; eşya miktarı, kat durumu, taşıma mesafesi ve ekstra hizmetlere göre değişiklik gösterir. AKR Nakliyat olarak, ücretsiz keşif hizmetimiz sayesinde taşınma öncesi detaylı analiz yapıyor ve size en uygun fiyat teklifini sunuyoruz. Fiyatlar şeffaf biçimde belirlenir, gizli ücretlerle karşılaşmazsınız.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger className="font-bold text-xl max-md:text-base">
                    Hangi şehirlerde hizmet veriyorsunuz?
                </AccordionTrigger>
                <AccordionContent>
                    AKR Nakliyat olarak Türkiye genelinde şehir içi ve şehirlerarası taşımacılık hizmeti sunuyoruz. Başta İstanbul, Ankara, İzmir gibi büyük şehirler olmak üzere birçok il ve ilçeye profesyonel taşıma çözümleri sağlıyoruz. Eşyalarınız nereye taşınacaksa, biz oradayız.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
                <AccordionTrigger className="font-bold text-xl max-md:text-base">
                    Taşınma öncesi nelere dikkat etmeliyim?
                </AccordionTrigger>
                <AccordionContent>
                    Taşınma öncesinde değerli eşyalarınızı ayırmanız, önemli belgeleri yanınıza almanız ve taşıma günü öncesinde iletişim bilgilerinin doğru olduğundan emin olmanız gerekir. AKR Nakliyat olarak taşınma öncesi size bir kontrol listesi sunarız ve tüm detaylarda sizi bilgilendiririz. Böylece stres yaşamadan güvenli bir taşınma süreci geçirirsiniz.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
