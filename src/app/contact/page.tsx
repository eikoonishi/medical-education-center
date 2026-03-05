import type { Metadata } from "next";
import { MapPin, Phone, Printer, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/ui/Container";
import { IllustrationSpeechBubble } from "@/components/common/Illustrations";

export const metadata: Metadata = {
  title: "お問い合わせ",
};

const contactInfo = [
  {
    icon: MapPin,
    label: "住所",
    value: "〒980-8575\n宮城県仙台市青葉区星陵町2-1",
  },
  {
    icon: Phone,
    label: "電話番号",
    value: "022-717-8508",
  },
  {
    icon: Printer,
    label: "FAX",
    value: "022-717-8223",
  },
  {
    icon: Mail,
    label: "メール",
    value: "meduc-jimu*grp.tohoku.ac.jp\n（*を@に変換してください）",
  },
  {
    icon: Clock,
    label: "受付時間",
    value: "平日 8:30〜17:00",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="お問い合わせ"
        description="ご質問・ご相談はお気軽にどうぞ"
        breadcrumbItems={[{ label: "お問い合わせ" }]}
      />
      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-ink-900">
                <span className="h-6 w-1 rounded-full bg-copper" />
                連絡先
              </h2>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-start gap-4 rounded-xl border border-ink-200/60 bg-white p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cafe-warm">
                      <info.icon className="h-5 w-5 text-copper" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink-400 mb-1">
                        {info.label}
                      </p>
                      <p className="text-base text-ink-700 whitespace-pre-line">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-ink-900">
                <span className="h-6 w-1 rounded-full bg-copper" />
                アクセス
              </h2>

              <div className="overflow-hidden rounded-xl border border-ink-200/60 bg-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.1!2d140.8429!3d38.2697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a281c0e2b4e5d%3A0x6f0e9f9a8e8e8e8e!2z5p2x5YyX5aSn5a2m5Yy75a2m6YOo!5e0!3m2!1sja!2sjp!4v1234567890"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="東北大学医学部 地図"
                />
              </div>

              <div className="mt-4 rounded-xl border border-ink-200/60 bg-white p-5">
                <p className="text-base text-ink-500 leading-relaxed">
                  <span className="font-medium text-ink-700">
                    最寄り駅:
                  </span>{" "}
                  仙台市地下鉄南北線「北四番丁駅」より徒歩約15分
                  <br />
                  <span className="font-medium text-ink-700">
                    バス:
                  </span>{" "}
                  仙台市営バス「大学病院前」下車すぐ
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
